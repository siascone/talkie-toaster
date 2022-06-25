import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UsersIndexContainer from './users/users_index_container';
import Splash from './splash/splash';
import UsersShowContainer from './users/user_show_container';

const App = () => {
    return (
        <div id='app'>
            <NavbarContainer />
            <Switch>
                <ProtectedRoute path='/users/:userId' component={UsersShowContainer}/>
                <ProtectedRoute path='/users' component={UsersIndexContainer} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <Route exact path='/' component={Splash} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;