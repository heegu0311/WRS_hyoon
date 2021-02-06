import React , { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {   // React.Memo 설정시 문법이 이해가 안됨..
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
          console.log('user 가 바뀌기 전');
          console.log(user);
        };
      }, [user]);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            
            &nbsp;

            <span><b>({user.email})</b></span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

/*
const User = ({user}) => {    // 예제랑 달리 화살표 함수로 쓰면 왜 안되는걸까요??? const 라서 파라미터를 받을 수 없는건지..
    <div>
        <b>{user.username}</b> <span><b>{user.email}</b></span>
    </div>
}
*/

const UserList = ({users, onRemove, onToggle}) => {  
    return (
        <div>
            {users.map(user => (                                                  // map 함수는 Javascript array 의 내장 함수로 모든 원소(여기서는 총 4개의 객체 원소)들에 대해 적용됨 
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>
            ))}
        </div>
    );
};

export default React.memo(UserList);