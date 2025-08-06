import React from "react";

class TestExperiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="card-title text-primary">
                  My Favorite Color is{" "}
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: this.state.favoritecolor,
                      color:
                        this.state.favoritecolor === "yellow"
                          ? "black"
                          : "white",
                    }}
                  >
                    {this.state.favoritecolor}
                  </span>
                </h1>

                <div id="div1" className="alert alert-info mt-3"></div>
                <div id="div2" className="alert alert-success mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestExperiment;