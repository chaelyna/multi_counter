import { useState } from "react";
import CounterList from "./CounterList";
import Total from "./Total";
import './App.css';

function App() {
  const [counters, setCounters] = useState([0, 0, 0]); // 카운터 상태 배열

  // 특정 카운터 증가
  const increase = (index) => {
    setCounters((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  // 특정 카운터 감소
  const decrease = (index) => {
    setCounters((prev) =>
      prev.map((count, i) => (i === index ? count - 1 : count))
    );
  };

  // 새로운 카운터 추가
  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    <div>
      <h1>Multi Counter</h1>
      <CounterList
        counters={counters}
        onIncrease={increase}
        onDecrease={decrease}
      />
      <button onClick={addCounter} style={{ marginTop: "20px" }}>
        Add Counter
      </button>
      <Total counters={counters} />
    </div>
  );
}

export default App;
