import React from "react";

class SimilarExperiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="card-title text-primary mb-4">
                  My Favorite Color is{" "}
                  <span
                    className="badge rounded-pill p-2"
                    style={{
                      backgroundColor: this.state.favoritecolor,
                      color:
                        this.state.favoritecolor === "yellow"
                          ? "black"
                          : "white",
                      fontSize: "1rem",
                      fontWeight: "normal",
                    }}
                  >
                    {this.state.favoritecolor}
                  </span>
                </h1>

                <div
                  id="mydiv"
                  className="alert alert-warning mt-3 fade show"
                  role="alert"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarExperiment;