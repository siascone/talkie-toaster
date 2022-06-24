import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = ({ errors }) => {
    return {
        errors: Object.values(errors.sessionErrors),
        formType: 'Signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginDemoUser: () => dispatch(login({ username: 'dave', password: 'reddwarf' })),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm)