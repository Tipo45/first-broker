import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { update_username } from "../../lib/pocketbase";

const Usernamesettings = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
  

  // Real-time validation for last name

  const validateUsername = (value) => {
    if (value === "") {
      setUsernameError("username required");
    } else {
      setUsernameError("");
    }
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateUsername(username);

    if (usernameError) {
      setLoading(false);
      return;
    }

    try {
      const result = await update_username(username);

      if (result) {
        alert("Successfuly updated username");
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
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-15 px-0">
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
                  bg-light-gray text-black-spider outline-dark-blue hover:outline-teal focus:outline-teal w-full rounded-lg p-2" data-aos="fade-down"
             data-aos-duration="1000"
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
    </section>
  );
};

export default Usernamesettings;
