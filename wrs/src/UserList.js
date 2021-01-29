import React from 'react';

const User = ({user}) => {
    <div>
        <b>{user.username}</b> <span><b>{user.email}</b></span>
    </div>
}

const UserList = () => {
    
    const users = [
        {
            id : 1,
            username : 'heegu1',
            email : "heegu1@gmail.com"
        },
        {
            id : 2,
            username : 'heegu2',
            email : "heegu2@gmail.com"
        },
        {
            id : 3,
            username : 'heegu3',
            email : "heegu3@gmail.com"
        },
        {
            id : 4,
            username : 'heegu4',
            email : "heegu4@gmail.com"
        }
    ];
    
    return (
        <div>
            <User user={users[0]}></User>
            <User user={users[1]}></User>
            <User user={users[2]}></User>
            <User user={users[3]}></User>
        </div>
    );
};

export default UserList;