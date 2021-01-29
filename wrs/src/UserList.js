import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span><b>{user.email}</b></span>
        </div>
    );
}

/*
const User = ({user}) => {    // 예제랑 달리 화살표 함수로 쓰면 왜 안되는걸까요??? const 라서 파라미터를 받을 수 없는건지..
    <div>
        <b>{user.username}</b> <span><b>{user.email}</b></span>
    </div>
}
*/

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
            {users.map(user => (        // map 함수는 Javascript array 의 내장 함수로 모든 원소(여기서는 총 4개의 객체 원소)들에 대해 적용됨 
                <User user={user}></User>
            ))}
        </div>
    );
};

export default UserList;