import React, { useState } from 'react';

function Counter() {
  
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        console.log (+1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        console.log (-1);
    }

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number+1)}>+1</button>     {/*  // 동작 */}
        {/* <button onClick={setNumber(number+1)}>+1</button>           // 미동작
        <button onClick={onIncrease}>+1</button>                    // 동작 */}
        <button onClick={onDecrease}>-1</button>
        </div>
  );
}

export default Counter;