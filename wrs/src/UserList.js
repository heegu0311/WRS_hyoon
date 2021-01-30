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

const UserList = ({users}) => {  
    return (
        <div>
            {users.map(user => (        // map 함수는 Javascript array 의 내장 함수로 모든 원소(여기서는 총 4개의 객체 원소)들에 대해 적용됨 
                <User user={user} key={user.id}></User>
            ))}
        </div>
    );
};

export default UserList;