import React from 'react';


function Hello({name, color, isSpecial}) {
  return (
    <div style={{color}}>
    {/* <div style={{color : "red"}}>  // 비구조화 할당 문법을 안쓸 경우, 함수 Hello의 파라미터에는 'props'라고 적어야함. */}
        {/* { isSpecial ? <b>*</b> : null }  // 조건부 렌더링 */}
        { isSpecial && <b>*</b> }
        안녕하세요 {name}
    </div>
  );
}

export default Hello;