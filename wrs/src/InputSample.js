import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  
//   const onChange = () => {      // 이건 왜 동작을 안할까?? e를 제거함.
//     setText(this.value);        // e제거하니 target이 undefined error가 나서 this 사용 해봄. 역시 에러. this는 무조건 객체를 지칭하게되는지... 
//   };

  const onReset = (e) => {          // 어떤 것은 event를 써줘야 하고 위에서는 안쓰고. 차이를 모르겠다. e를 써줘도 동작은 제대로 되는데, 항상 써주면 안되는건가?
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;