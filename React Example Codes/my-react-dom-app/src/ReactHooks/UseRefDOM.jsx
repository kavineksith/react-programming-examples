import { useRef } from 'react';

function Example() {
  // useRef creates a mutable ref object that persists for the lifetime of the component
  // We initialize it to hold a reference to our input element
  const inputElement = useRef();

  // This function will be called when the button is clicked
  const focusInput = () => {
    // Access the current DOM node via inputElement.current
    // and call the focus() method to bring focus to the input
    inputElement.current.focus();
    
    // Optional: You can also select the text in the input
    // inputElement.current.select();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Focus Input Demo</h2>
              
              {/* 
                The input element with a ref attribute that connects it to our inputElement ref.
                We've added Bootstrap form-control class for styling.
              */}
              <input 
                type="text" 
                ref={inputElement} 
                className="form-control mb-3" 
                placeholder="Type something..."
              />
              
              {/* 
                Button that triggers focusInput when clicked.
                We've added Bootstrap btn classes for styling.
              */}
              <button 
                onClick={focusInput} 
                className="btn btn-primary w-100"
              >
                Focus the Input
              </button>
              
              <p className="text-muted mt-3 small">
                Click the button to programmatically focus the input field above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;