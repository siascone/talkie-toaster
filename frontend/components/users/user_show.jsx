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
                <div className='user-image'>
                    <div className='user-show-image'></div>
                    <div className='user-username'>
                        <h2>{this.props.user.username}</h2>
                    </div>
                </div>

                <div className='user-bio-dash'>
                    <div className='user-details'>
                        <h3>{this.props.user.first_name} {this.props.user.last_name}'s Bio</h3>
                        <p>Name: {this.props.user.first_name} {this.props.user.last_name}</p>
                        {/* <p>Age: {this.props.user.age}</p> */}
                        <br />
                        <p>Email: {this.props.user.email}</p>
                        <br />
                        <p>JMC Years of Service: coming soon...</p>
                        <br />
                        <p>General Bio: coming soon...</p>
                    </div>
                    <div className='user-dashboard'>
                        <h3>Post Dashboard coming soon</h3>
                    </div>
                    {/* <div className='user-asside'>
                        <h3>Other details coming soon</h3>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(UserShow)