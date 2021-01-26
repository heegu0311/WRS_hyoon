import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState ({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    const keyName = name;                 // 불필요한 한줄이지만 헷갈려서 이렇게도 적어봄
    setInputs({
      ...inputs,
      [keyName] : value                   // keyName은 'name' 또는 'nickname'으로 사용하게됨
    });
  };

  const onReset = (e) => {
    setInputs ({
      name: '',
      nickname: ''
    });
  };

  return (
    <div>
      <div>
        <input name = "name" placeholder="이름" onChange={onChange} value={name}/>
        <input name = "nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;