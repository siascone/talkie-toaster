import * as APIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const requestAllUsers = () => dispatch => {
    return APIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const requestUser = (userId) => dispatch => {
    return APIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

