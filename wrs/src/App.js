// github 테스트

// import Counter from './Counter';
// import Hello from './Hello';
// import InputSample from './InputSample';
// import InputSampleOneInput from './InputSampleOneInput';
import { useRef, useState, useMemo } from 'react';
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

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

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

  const onCreate = () => {
    let nextId = findHighestId(users) + 1 ;

    const user = {
      id : nextId,
      username,
      email 
    }
    setUsers([  // users 는 배열이므로 대괄호 사용
      ...users, user
    ]);

    setInputs({
      username: '',
      email: ''
    });
  }

  const findHighestId = (users) => {   // users 객체의 id 값중에서 id 최대값 구하는 방식으로 해서 useRef를 안써보고 싶은데 잘 안됨.
    let highestId;
    console.log('loop start');

    for (let i=users.length;i>0;i--) {
      highestId = ( (typeof(users[i]) !== 'undefined' && (typeof(users[i-1]) !== 'undefined')) ? (users[i-1].id < users[i].id ? users[i].id : users[i-1].id) : users[i-1].id);
      console.log(highestId);
    }
    return highestId;
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id ));
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      {/* <Wrapper>
        <Hello name="react" color="green" isSpecial={true}/>
        <Hello color="pink"/>
        <b>7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기</b>
        <Counter></Counter>
        <InputSample></InputSample>
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
