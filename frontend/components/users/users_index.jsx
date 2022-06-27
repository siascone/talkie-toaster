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
            <div className='users-index-main'>
                <h1>Meet the Crew!</h1>
                <div className='users-index'>
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
            </div>
        )
    }
}

export default UsersIndex;