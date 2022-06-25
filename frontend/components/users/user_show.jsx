import React from 'react';
import { withRouter } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    }

    render() {

        if (!this.props.user) return null

        return (
            <div className='user-page'>
                <div className='user-bio'>
                    <div className='image-user-detials'>
                        <div className='user-show-image'></div>
                        <div className='user-details'>
                            <h2>{this.props.user.username}</h2>
                            <p>Name: {this.props.user.first_name} {this.props.user.last_name}</p>
                            <p>Age: {this.props.user.age}</p>
                            <p>Email: {this.props.user.email}</p>
                        </div>
                    </div>
                    <div className='user-show-username'>
                    </div>
                </div>
                <div className='user-dashboard'>
                    <h3>Dashboard coming soon...</h3>
                </div>
            </div>
        )
    }
}

export default withRouter(UserShow)