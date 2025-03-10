import { FaArrowAltCircleLeft, FaSpinner } from "react-icons/fa";
import Usersidebar from "./Usersidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { update_user } from "../../lib/pocketbase";

const Usernamesettings = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const validateFirstname = (value) => {
    if (value === "") {
      setFirstnameError("First name required");
    } else {
      setFirstnameError("");
    }
  };

  // Real-time validation for last name
  const validateLastname = (value) => {
    if (value === "") {
      setLastnameError("Last name required");
    } else {
      setLastnameError("");
    }
  };

  const validateUsername = (value) => {
    if (value === "") {
      setUsernameError("username required");
    } else {
      setUsernameError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateFirstname(firstname);
    validateLastname(lastname);
    validateUsername(username);

    if (firstnameError || lastnameError || usernameError) {
      setLoading(false);
      return;
    }

    try {
      const result = await update_user(firstname, lastname, username);

      if (result.record) {
        navigate("/user_account/account-information?update=successfull");
      }
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update user. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="flex">
      {/* Sidebar */}
      <Usersidebar />

      <div className="flex-grow pr-1 pl-4 ml-13 tablet:ml-43 transition-all duration-300 mt-1 mb-1">
        <div className="bg-gray-400 p-4 rounded-lg">
          <Link to="/user_account/account-information">
            <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
              <FaArrowAltCircleLeft className="text-2xl text-black-spider group-hover:text-white-rice" />
            </div>
          </Link>
          <div>
            <h1 className="text-2xl text-center font-semibold">
              Account Information Settings
            </h1>
          </div>

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
                  className="outline-1 bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full animate-fade-right"
                  style={{ animationDelay: "0.3s" }}
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
                  bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full animate-fade-left"
                  style={{ animationDelay: "0.5s" }}
                />
                {lastnameError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {lastnameError}
                  </div>
                )}
              </div>
            </div>

            <div className=" mt-15 px-2">
              <div className="">
                <input
                  type="text"
                  placeholder="enter new username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    validateUsername(e.target.value);
                  }}
                  onBlur={(e) => validateUsername(e.target.value)}
                  maxLength={16}
                  className="outline-1
                  bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal w-full rounded-lg p-2"
                />
                {usernameError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {usernameError}
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
                  className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-pointer font-medium text-white-rice rounded-lg animate-zoom-in"
                  style={{ animationDelay: "1.2s" }}
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Usernamesettings;
