// github 테스트

import Counter from './Counter';
// import Hello from './Hello';
// import InputSample from './InputSample';
// import InputSampleOneInput from './InputSampleOneInput';
import { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
// import Wrapper from './Wrapper';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  const a = users.filter(user => user.active);
  console.log(a);
  return a.length;
}

function App() {

  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });
  
  const {username, email} = inputs;

  const onChange = useCallback(
    (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  },[inputs]);

  const [users, setUsers] = useState([
    {
        id : 1,
        username : 'A',
        email : "A@gmail.com",
        active : true
    },
    {
        id : 2,
        username : 'B',
        email : "B@gmail.com",
        active : false
    },
    {
        id : 3,
        username : 'C',
        email : "C@gmail.com",
        active : false
    }
  ]);
  let nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email 
    }
    setUsers([  // users 는 배열이므로 대괄호 사용
      ...users, user
    ]);

    // setUsers(users.concat(user)); // 바로 위 setUsers와 동일할 기능. 다른 방법


    setInputs({
      username: '',
      email: ''
    });

    nextId.current+=1;
  },[users, username, email]);

  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id ));
  }, [users])

  const onToggle = useCallback((id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },[users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
        {/* <Wrapper>
        <Hello name="react" color="green" isSpecial={true}/>
        <Hello color="pink"/>
        <b>7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기</b> */}
        <Counter></Counter>
        {/* <InputSample></InputSample>
        <InputSampleOneInput></InputSampleOneInput> */}
        <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
        <div>활성사용자 수 : {count}</div>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
