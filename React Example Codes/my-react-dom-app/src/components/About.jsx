function About() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card shadow mb-4">
          <div className="card-body">
            <h2 className="card-title">Our Story</h2>
            <p className="card-text">
              Founded in 2023, we're dedicated to creating awesome React
              applications with proper routing.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Our Team</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">John Doe - CEO</li>
              <li className="list-group-item">Jane Smith - CTO</li>
              <li className="list-group-item">Mike Johnson - Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
