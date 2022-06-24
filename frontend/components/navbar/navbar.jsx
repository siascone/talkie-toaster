import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout()
            .then(() => this.props.history.push('/login'));
    }

    render() {

        let greeting;

        if (this.props.currentUser) {
            greeting = <div className='greeting-logged-in'>
                <p className='greeting-message'>Welcome, {this.props.currentUser.username}</p>
                <button className="logout-button" onClick={ this.handleLogout }>Logout</button>
            </div>
        } else {
            greeting = <div className='greeting-logged-out'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        }

        return (
            <div className='navbar'>
                <Link className='home-link' to='/'>
                    <div className="nav-left">
                        <p>Talkie Toaster</p>
                    </div>
                </Link>
                <div className="nav-right">
                    {greeting}
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);