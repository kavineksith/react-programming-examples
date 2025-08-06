import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body text-center">
                {myheader}
                <button
                  type="button"
                  className="btn btn-danger mt-3"
                  onClick={this.delHeader}
                >
                  Delete Header
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1 className="text-primary mb-4">Hello World!</h1>;
  }
}

export default Container;