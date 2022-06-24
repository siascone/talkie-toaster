import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'
const App = () => {
    return (
        <div id='app'>
            <NavbarContainer />
            <Switch>
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <Route exact path='/' component={Splash} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;