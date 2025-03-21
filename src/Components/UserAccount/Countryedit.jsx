import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { update_country } from "../../lib/pocketbase";
import { FaSpinner } from "react-icons/fa";

const Countryedit = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [running, setRunning] = useState(null);
  const [countryError, setCountryError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        countryNames.sort();
        setCountries(countryNames);
        setRunning(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setRunning(false);
      });
  }, []);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError("choosee a country");
    } else {
      setCountryError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateCountry(country);

    if (countryError) {
      setLoading(false);
      return;
    }

    try {
      const result = await update_country(country);

      if (result) {
        alert("Successfuly updated country");
        navigate("/user_account/account-information");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-15 px-0">
          <div>
            <select
              id="country"
              name="country"
              value={country}
              onChange={handleCountryChange}
              onBlur={(e) => validateCountry(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white-rice rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              disabled={running} data-aos="fade-up"
             data-aos-duration="1000"
            >
              <option value="">
                {running ? "Loading countries..." : "Select a country"}
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {countryError && (
              <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                {countryError}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {loading ? (
            <button className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-not-allowed font-medium text-white-rice rounded-lg">
              <svg
                className="mr-3 size-8 text-light-gray animate-spin"
                viewBox="0 0 24 24"
              >
                <FaSpinner />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-pointer font-medium text-white-rice rounded-lg"
              data-aos="zoom-in"
             data-aos-duration="2000"
            >
              Update
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Countryedit;
