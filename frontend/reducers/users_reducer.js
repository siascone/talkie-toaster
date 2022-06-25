import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
     
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            nextState = Object.assign(nextState, action.users)
            return nextState
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        default:
            return state;
    }
};

export default usersReducer