import { connect } from "react-redux"
import { requestUser } from "../../actions/user_actions"
import UserShow from './user_show'

const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: (userId) => dispatch(requestUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)