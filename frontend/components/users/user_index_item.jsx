import React from 'react';
import { withRouter } from 'react-router-dom';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.id)
    }

    render() {
        return (
            <div className='user-index-item-card'>
                <div className='icon-username'>
                    <div className='user-icon'></div>
                    <h3>{this.props.user.username}</h3>
                </div>
                <p>Name: {this.props.user.first_name} {this.props.user.last_name}</p>
            </div>
        )
    }
}

export default withRouter(UserIndexItem)