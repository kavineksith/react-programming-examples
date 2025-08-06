function MyProfiles() {
  const profiles = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28 },
    { id: 2, firstName: "Elsa", lastName: "Smith", age: 32 },
    { id: 3, firstName: "Michael", lastName: "Johnson", age: 25 },
  ];

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">User Profiles</h3>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.id}>
                  <th scope="row">{profile.id}</th>
                  <td>{profile.firstName}</td>
                  <td>{profile.lastName}</td>
                  <td>{profile.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyProfiles;
