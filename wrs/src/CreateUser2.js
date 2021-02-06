import React from 'react';

function CreateUser2({username, email, onChange, onCreate}) {
  return (
    <>
      <input
        name="username"
        placeholder="username"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => onCreate()}
      >등록</button>
    </>
  );
}

export default CreateUser2;
