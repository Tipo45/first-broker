import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { update_names } from "../../lib/pocketbase";

const Namesupdate = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateFirstname = (value) => {
    if (value === "") {
      setFirstnameError("First name required");
    } else {
      setFirstnameError("");
    }
  };

  const validateLastname = (value) => {
    if (value === "") {
      setLastnameError("Last name required");
    } else {
      setLastnameError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateFirstname(firstname);
    validateLastname(lastname);

    if (firstnameError || lastnameError) {
      setLoading(false);
      return;
    }

    try {
      const result = await update_names(firstname, lastname);

      if (result) {
        alert("Successfuly updated names");
        navigate("/user_account/account-information");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="grid gap-2">
            <input
              id="firstname"
              type="text"
              placeholder="enter first name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                validateFirstname(e.target.value);
              }}
              onBlur={(e) => validateFirstname(e.target.value)}
              maxLength={16}
              className="outline-1 bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full" data-aos="fade-right"
             data-aos-duration="1000"
            />
            {firstnameError && (
              <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                {firstnameError}
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <input
              id="lastname"
              type="text"
              placeholder="enter last name"
              value={lastname}
              maxLength={16}
              onChange={(e) => {
                setLastname(e.target.value);
                validateLastname(e.target.value);
              }}
              onBlur={(e) => validateLastname(e.target.value)}
              className="outline-1
                  bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full"
              data-aos="fade-left"
             data-aos-duration="1000"
            />
            {lastnameError && (
              <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                {lastnameError}
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
    </div>
  );
};

export default Namesupdate;
