import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = ({ errors }) => {
    return {
        errors: Object.values(errors.sessionErrors),
        formType: 'Login'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        loginDemoUser: () => dispatch(login({ username: 'dave', password: 'reddwarf' })),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm)