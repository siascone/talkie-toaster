import React from 'react';
import UserIndexItem from './user_index_item';


class UsersIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.requestAllUsers();
    }

    render() {
        return (
            <div>
                <h1>Meet the crew!</h1>
                {this.props.users.map((user) => {
                    return (
                        <UserIndexItem 
                            user={user}
                            fetchUser={this.props.fetchUser}
                            key={user.id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default UsersIndex;