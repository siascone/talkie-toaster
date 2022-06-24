import React from 'react';
import { render } from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        this.props.processForm(user)
            .then(() => this.props.history.push('/'))

        // if (this.props.history.location.pathname === '/upload') {
        //     this.props.loginDemoUser()
        //         .then(() => this.props.closeModal())
        // } else {
        //     this.props.processForm(user)
        //         .then(() => this.props.closeModal())
        //         .then(() => this.props.history.push('/discover'));
        // }

    };

    guestLogin(e) {
        e.preventDefault();

        this.props.loginDemoUser()
            .then(() => this.props.history.push('/'))
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <li key={`error ${i}`}>{error}</li>
                ))}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {

        let inputs;
        let signupLoginLink


        if (this.props.formType === 'Signup') {
            signupLoginLink = <p className='signup-login-link'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
            inputs = <div className='session-form-inputs'>

                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    required
                />
                <br />
                <input
                    id="email"
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    required
                />
                <br />
                <input
                    id="first-name"
                    type="text"
                    placeholder="first name"
                    value={this.state.firstName}
                    onChange={this.update('first_name')}
                    required
                />
                <br />
                <input
                    id="last-name"
                    type="text"
                    placeholder="last name"
                    value={this.state.lastName}
                    onChange={this.update('last_name')}
                    required
                />
                <br />
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    required
                />
            </div>
        } else {
            signupLoginLink = <p className='signup-login-link'>
                Don't have an account yet? <Link to='/signup'> Sign Up</Link>
            </p>
            inputs = <div className='session-form-inputs'>
                <label htmlFor="username"></label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    required
                />
                <br />
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    required
                />

            </div>
        }
        let errors

        if (this.props.errors.length) {
            errors = this.renderErrors()
        }


        return (
            <div className='session-form-main'>
                <form className='session-form' onSubmit={this.handleSubmit} noValidate>
                    {inputs}
                    <br />
                    <button className="session-form-submit"
                        type='submit'>
                        {this.props.formType}
                    </button>
                    <br />
                    <button className='session-form-submit guest-login'
                        onClick={this.guestLogin}>
                        Guest Login
                    </button>
                </form>
                {signupLoginLink}
                {errors}
            </div>
        )
    }
};

export default withRouter(SessionForm);