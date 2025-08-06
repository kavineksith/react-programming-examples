// React Component Lifecycle Methods - with Mouting & Updating phase
import React from "react";

class Experiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "blue",
      ignoreProps: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.ignoreProps) return null; // Skip if flag is true

    if (props.favColor === "") {
      return { favoriteColor: "blue" };
    } else if (props.favColor !== state.favoriteColor) {
      return { favoriteColor: props.favColor };
    } else {
      return null;
    }
  }

  // update phrase method
  shouldComponentUpdate() {
    return true; // Prevents re-rendering
    // if you add this to false, the component will not re-render
    // and the color will not change when you click the button.
  }

  changeColor = () => {
    this.setState({ favoriteColor: "green" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow",
        ignoreProps: true, // Set flag to ignore future prop changes
      });
    }, 1000);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="card-title text-primary">
                  My Favorite color is{" "}
                  <span className="badge bg-danger text-light">
                    {this.state.favoriteColor}
                  </span>
                </h1>
                <button
                  className="btn btn-primary mt-3"
                  onClick={this.changeColor}
                >
                  Change Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiment;
