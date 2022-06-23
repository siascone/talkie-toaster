import { combineReducers } from "redux";
import sessionsErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: sessionsErrorsReducer
});

export default errorsReducer;