import { connect } from 'react-redux';
import { logout, signup, login } from '../../actions/session_actions';
import NavBar from './navbar'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)