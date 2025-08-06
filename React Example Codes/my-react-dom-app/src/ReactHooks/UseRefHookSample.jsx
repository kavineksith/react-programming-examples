import { useState, useEffect, useRef } from 'react';

function DisplayCount() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Render Counter</h2>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">Type something:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="alert alert-info">
            <h4 className="alert-heading">Render Count: {count.current}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCount;