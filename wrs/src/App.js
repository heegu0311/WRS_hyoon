import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  const a = users.filter(user => user.active);
  console.log(a);
  return a.length;
}

const initialState = {
  inputs : {
    username : '',
    email : ''
  },

  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function App() {
  
  return (
    <div>
       <CreateUser />
        <UserList users={[]}></UserList>
        <div>활성사용자 수 : 0 </div>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
