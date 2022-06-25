import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.id)
    }

    render() {
        return (
            <Link to={`/users/${this.props.user.id}`} className='user-index-item-card'>
                <div className='thumbnail-username'>
                    <div className='user-thumbnail'></div>
                    <h3>{this.props.user.username}</h3>
                </div>
                <p>Name: {this.props.user.first_name} {this.props.user.last_name}</p>
            </Link>
        )
    }
}

export default withRouter(UserIndexItem)