import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => {
    return (
        <div id='app'>
            <h1>Welcome to Talkie Toaster</h1>
            <p>Talkie's the name, Toasting's the game... Would you like some toast?</p>

            <Switch>
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
            </Switch>
        </div>
    )
}

export default App;