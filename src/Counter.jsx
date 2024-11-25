/* eslint-disable react/prop-types */
function Counter({ index, count, onIncrease, onDecrease }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ marginRight: "10px" }}>
        Counter {index + 1}: {count}
      </span>
      <button onClick={() => onIncrease(index)}>+</button>
      <button onClick={() => onDecrease(index)} style={{ marginLeft: "5px" }}>
        -
      </button>
    </div>
  );
}

export default Counter;
