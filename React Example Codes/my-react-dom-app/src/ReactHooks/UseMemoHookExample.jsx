import { useState, useMemo } from "react";

const SimpleMemoExample = () => {
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h1 className="card-title mb-4">useMemo Example</h1>
          
          <div className="d-flex align-items-center justify-content-center mb-4">
            <span className="fs-3 me-3">Count: {count}</span>
            <button 
              onClick={increment} 
              className="btn btn-primary btn-lg"
            >
              +
            </button>
          </div>
          
          <div className="alert alert-info">
            <h2 className="h4">Expensive Calculation Result:</h2>
            <p className="display-6 mb-0">{calculation}</p>
            <small className="text-muted">(Check console for calculation logs)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default SimpleMemoExample;