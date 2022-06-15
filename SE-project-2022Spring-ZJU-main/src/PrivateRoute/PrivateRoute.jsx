import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { LoginInterface } from '../loginInterface';

// import { accountService } from '../_services/account.service';


// eslint-disable-next-line react/prop-types
function PrivateRoute({ path: Path, component: Component, ...rest }) {
    console.log('localStorage.getItem(\'token\')', localStorage.getItem('token'));
    console.log('localStorage.getItem(\'role\')', localStorage.getItem('role'));
    // console.log('localStorage.getItem(\'imageList\')', localStorage.getItem('imageList'));
    return (
        <Route {...rest} render={props => {
            let userID = localStorage.getItem('token');  
            let role = localStorage.getItem('role');
            if (!userID) {
                // not logged in so redirect to login page with the return url
                // eslint-disable-next-line react/prop-types
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // else if (role === 'admin') {
            //     // logged in so return component
            //     return <Redirect to={{ pathname: '/admin' }} />
            // }
            else if (role === 'tourist' || Path === '/admin' && role != 'admin') {
                // logged in as tourist so redirect to home page
                return <Redirect to={{ pathname: '/home' }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}

// PrivateRoute.propTypes = {
//     component: required
// }
export { PrivateRoute };