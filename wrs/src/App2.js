import React, { useState, useRef, useMemo} from 'react';
import CreateUser2 from './CreateUser2';
import UserList2 from './UserList2';

const countActiveUser = (users) => {
    console.log('Counting active users...');
    return users.filter(user => user.active).length
}

const App2 = () => {

    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    const { username, email } = inputs;

    const [users, setUsers] = useState([
        {           
            id : 1,
            username : 'a',
            email : 'a@gmail.com',
            active : true
        },
        {
            id : 2,
            username : 'b',
            email : 'b@gmail.com',
            active : false
        }
        ,
        {
            id : 3,
            username : 'c',
            email : 'c@gmail.com',
            active : false
        }
    ]);

    const onChange = (e) => {       // 사용자가 실제 어떤 입력을 하는 경우만 event를 넣어주는건가?
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const nextId = useRef(users.length+1);
    const onCreate = () => {
        const user = {
            id : nextId.current,
            username,
            email
        }
        setUsers([      // 대괄호 주의 배열이기 때문에
            ...users, user
        ])
        setInputs({
            username : '',
            email : ''
        })
        nextId.current += 1;
    }

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id ));
    }

    const onToggle = (id) => {
        setUsers(
            users.map(user => (
                user.id === id ? {...user, active : !user.active}: user)
            )
        );
    }

    const count = useMemo(() => countActiveUser(users),[users]);

    return (
        <div>
            <CreateUser2 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList2 users={users} onRemove={onRemove} onToggle={onToggle}></UserList2>
            <>Active users : {count}</>
        </div>
    );
};

export default App2;