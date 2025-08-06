import { useState, useRef, useEffect } from 'react';

function App() {
  // State to store the current input value
  const [inputValue, setInputValue] = useState("");
  
  // useRef to store the previous value without causing re-renders
  const previousInputValue = useRef("");

  // useEffect runs after every render when inputValue changes
  useEffect(() => {
    // Update the ref's current value to track the previous state
    previousInputValue.current = inputValue;
  }, [inputValue]); // Only re-run when inputValue changes

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Input Value Tracker</h2>
              
              {/* Input field with Bootstrap styling */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control mb-4"
                placeholder="Type something..."
              />
              
              {/* Current value display with Bootstrap text styling */}
              <div className="alert alert-primary">
                <h4 className="alert-heading">Current Value:</h4>
                <p className="mb-0">{inputValue || "(empty)"}</p>
              </div>
              
              {/* Previous value display with Bootstrap text styling */}
              <div className="alert alert-secondary">
                <h4 className="alert-heading">Previous Value:</h4>
                <p className="mb-0">{previousInputValue.current || "(empty)"}</p>
              </div>
              
              <p className="text-muted mt-3 small">
                The previous value is tracked using useRef without causing additional re-renders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;