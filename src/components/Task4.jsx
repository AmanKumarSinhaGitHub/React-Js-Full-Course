import React, { useState } from "react";

function CountrySelector() {

  const initialCountries = [
    { name: "India", code: "IN" },
    { name: "Pakistan", code: "PK" },
    { name: "Bangladesh", code: "BG" },
  ];

  // Country selected in dropdown menu
  const [selectedCountry, setSelectedCountry] = useState("");

  const [newCountry, setNewCountry] = useState({ name: "", code: "" });
  const [countries, setCountries] = useState([...initialCountries]);

  
  function handleSelectChange(e) {
    setSelectedCountry(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // Ensure both name and code are provided
    if (newCountry.name && newCountry.code) {
      setCountries([...countries, newCountry]);
      setNewCountry({ name: "", code: "" }); // Clear the form fields
    }
  }

  function handleInputChange(e) {
    setNewCountry({
      ...newCountry,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className="container">
        <h1>Task 4</h1>

        <h2>Your Selected Country: {selectedCountry}</h2>

        <select className="btn" onChange={handleSelectChange}>
          <option value="">Select a Country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Country Name"
            onChange={handleInputChange}
            value={newCountry.name}
          />

          <input
            type="text"
            name="code"
            placeholder="Enter Country Code"
            onChange={handleInputChange}
            value={newCountry.code}
          />

          <button type="submit" className="btn">
            Add Country
          </button>
        </form>
      </div>
    </>
  );
}

export default CountrySelector;
