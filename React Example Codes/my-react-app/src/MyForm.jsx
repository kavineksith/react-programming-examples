import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
    bio: "",
    country: "",
    gender: "",
    interests: [],
    birthday: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setInputs((values) => {
      if (checked) {
        return { ...values, [name]: [...values[name], value] };
      } else {
        return {
          ...values,
          [name]: values[name].filter((item) => item !== value),
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`
      Form submitted!
      Name: ${inputs.username}
      Age: ${inputs.age}
      Birthday: ${inputs.birthday || "Not specified"}
      Bio: ${inputs.bio}
      Country: ${inputs.country}
      Gender: ${inputs.gender}
      Interests: ${inputs.interests.join(", ") || "None"}
    `);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Complete User Information Form
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Existing text and number inputs */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Enter your name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Enter your age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                    min="1"
                    max="120"
                  />
                </div>

                {/* Birthday Date Picker */}
                <div className="mb-3">
                  <label htmlFor="birthday" className="form-label">
                    Birthday:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    name="birthday"
                    value={inputs.birthday}
                    onChange={handleChange}
                    max={new Date().toISOString().split("T")[0]} // Restrict to past dates
                  />
                </div>

                {/* Textarea */}
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Your Bio:
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    rows="3"
                    value={inputs.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Select dropdown */}
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country:
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={inputs.country}
                    onChange={handleChange}
                  >
                    <option value="">Select a country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Radio buttons */}
                <div className="mb-3">
                  <label className="form-label">Gender:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={inputs.gender === "male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={inputs.gender === "female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      checked={inputs.gender === "other"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="mb-3">
                  <label className="form-label">Interests:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="interests"
                      id="sports"
                      value="sports"
                      checked={inputs.interests.includes("sports")}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="sports">
                      Sports
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="interests"
                      id="music"
                      value="music"
                      checked={inputs.interests.includes("music")}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="music">
                      Music
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="interests"
                      id="reading"
                      value="reading"
                      checked={inputs.interests.includes("reading")}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="reading">
                      Reading
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="interests"
                      id="travel"
                      value="travel"
                      checked={inputs.interests.includes("travel")}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="travel">
                      Travel
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
