import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

import { login, logout, signup } from './actions/session_actions';

import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {

    let store;

    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    window.store = store;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    ReactDOM.render(<Root store={store}/>, root)
})