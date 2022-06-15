import React from 'react';

// eslint-disable-next-line react/prop-types
function Profile () {
    // console.log(localStorage.getItem('role'));
    let role = localStorage.getItem('role');
    if (role === '"admin"') { //! the string is with double quotes 
        return (
            <h1>Admin</h1>
        );
    }
    else if (role === '"user"') {
        return (
            <h1>User</h1>
        );  
    }

    return (
        <h1>Profile</h1>
    );
}

export default Profile;