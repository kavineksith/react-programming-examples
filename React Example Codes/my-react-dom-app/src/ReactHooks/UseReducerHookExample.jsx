import { useReducer } from "react";

// Reducer function that handles state updates
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

function CountViewer() {
  // useReducer takes the reducer function and initial state
  // Returns current state and dispatch function to trigger actions
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Counter with useReducer</h2>

              {/* Display current count with Bootstrap styling */}
              <div className="display-4 mb-4">{state.count}</div>

              {/* Action buttons with Bootstrap styling */}
              <div className="d-flex gap-2 justify-content-center">
                <button
                  onClick={() => dispatch({ type: "DECREMENT" })}
                  className="btn btn-danger btn-lg"
                >
                  Decrement -
                </button>

                <button
                  onClick={() => dispatch({ type: "RESET" })}
                  className="btn btn-secondary btn-lg"
                >
                  Reset
                </button>

                <button
                  onClick={() => dispatch({ type: "INCREMENT" })}
                  className="btn btn-success btn-lg"
                >
                  Increment +
                </button>
              </div>

              <p className="text-muted mt-4 small">
                This uses useReducer to manage state updates through actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountViewer;
