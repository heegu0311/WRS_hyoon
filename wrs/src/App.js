import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="green" isSpecial={true}/>
        <Hello color="pink"/>
        <b>7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기</b>
        <Counter></Counter>
        <InputSample></InputSample>
      </Wrapper>
    </div>
  );
}

export default App;
