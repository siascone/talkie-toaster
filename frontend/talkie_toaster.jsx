import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

import { login, logout, signup } from './actions/session_actions';

import configureStore from './store/store'
import { fetchAllUsers, fetchUser } from './util/users_api_util';
import { requestAllUsers, requestUser } from './actions/user_actions';


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
    window.requestAllUsers = requestAllUsers
    window.requestUser = requestUser


    ReactDOM.render(<Root store={store}/>, root)
})