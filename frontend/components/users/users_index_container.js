import { connect } from "react-redux";
import { requestAllUsers } from "../../actions/user_actions";
import UsersIndex from './users_index'

const mapStatetoProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAllUsers: () => dispatch(requestAllUsers()),
        requestUser: (userId) => dispatch(requestUser(userId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(UsersIndex)