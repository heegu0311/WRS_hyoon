// import Counter from './Counter';
// import Hello from './Hello';
// import InputSample from './InputSample';
// import InputSampleOneInput from './InputSampleOneInput';
import { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
// import Wrapper from './Wrapper';

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
        username : 'heegu1',
        email : "heegu1@gmail.com",
        active : true
    },
    {
        id : 2,
        username : 'heegu2',
        email : "heegu2@gmail.com",
        active : false
    },
    {
        id : 3,
        username : 'heegu3',
        email : "heegu3@gmail.com",
        active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
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
    nextId.current += 1;

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
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
