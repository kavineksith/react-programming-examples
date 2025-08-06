import { useState, useCallback } from "react";

function SimpleCallbackExample() {
  const [count, setCount] = useState(0);

  // This function is memoized and won't change between re-renders
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Empty dependency array means it's created only once

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button
        onClick={increment}
        style={{ padding: "10px 20px", fontSize: "18px" }}
      >
        Increment
      </button>
      <p>The increment function is memoized with useCallback</p>
    </div>
  );
}

export default SimpleCallbackExample;
