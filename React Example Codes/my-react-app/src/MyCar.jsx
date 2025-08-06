function MyCar() {
  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "Car",
    year: 2021,
    color: "red",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };

  // Destructure the vehicle object
  const { type, color, brand, model } = vehicleOne;

  // Create message strings
  const vehicleMessage = `My ${type} is a ${color} ${brand} ${model}.`;
  const registrationMessage = `My ${model} is registered in ${vehicleOne.registration.state}.`;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>Vehicle Information</h3>
        </div>
        <div className="card-body">
          <div className="list-group">
            <div className="list-group-item">
              <strong>Vehicle:</strong> {vehicleMessage}
            </div>
            <div className="list-group-item">
              <strong>Registration:</strong> {registrationMessage}
            </div>
            <div className="list-group-item">
              <strong>Year:</strong> {vehicleOne.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCar;
