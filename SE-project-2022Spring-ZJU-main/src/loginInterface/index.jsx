import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Login} from "./Login.jsx";
import {Register} from "./Register.jsx";
import { StaffLogin } from './staffLogin.jsx';
import {Init} from "./Init.jsx";

import PropTypes from 'prop-types';

// import history from "./history";
// let path = "";

function LoginInterface ({setRole}) {

    const [token, setToken] = useState();
    // const [role, setRole] = useState();

    if (!token){
        
        return (              
            <Router>
                <Switch>
                    <Route path="/login/stafflogin" >
                        <StaffLogin setToken={setToken} setRole={setRole}/>
                    </Route>
                    <Route path="/login/register" >
                        <Register setToken={setToken} />
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken} setRole={setRole}/>
                    </Route>
                    <Route path="/" component={Init}>
                    </Route>
                </Switch>
            </Router>
        );
    }
    else {
            return (              
            <Router>
                <Switch>
                    <Route path="/login/register" >
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/login">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/login/stafflogin" >
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/" component={Init}>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

LoginInterface.propTypes = {
    // setToken: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired
}

export {LoginInterface};