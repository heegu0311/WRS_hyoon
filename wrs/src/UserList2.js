import React, { useEffect } from 'react';

function User2({user, onRemove, onToggle}) {

    useEffect(() => {
        console.log('setting up below user');
        console.log(user);
        return () => {
            console.log('before user changes');
            console.log(user);
        }
    }, [user]);
    return (
        <div>
            <b 
                style = {{
                    cursor : 'pointer',
                    color : user.active ? 'green' : 'red'
                }}
                onClick={() => onToggle(user.id)}
            >[{user.id}] </b>
            <b>{user.username} ({user.email}) </b>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

const UserList2 = ({users, onRemove, onToggle}) => {
    return (
        <div>
            {users.map(user => (
                <User2 user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>   // key 사용하는 이유.. 아직도 잘 이해가 안됨
            ))}
        </div>
    );
};

export default UserList2;