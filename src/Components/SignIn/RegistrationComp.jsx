import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { RxCaretLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { create_user } from "../../lib/pocketbase";

const RegistrationComp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Real-time validation for first name
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

  // Real-time validation for email
  const validateEmail = (value) => {
    if (value === "") {
      setEmailError("Email required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Real-time validation for password
  const validatePassword = (value) => {
    if (value === "") {
      setPasswordError("Password required");
    } else if (value.length < 8) {
      setPasswordError("Password is too short");
    } else if (confirmpassword !== "" && value !== confirmpassword) {
      setPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      setConfirmPasswordError("");
    }
  };

  // Real-time validation for confirm password
  const validateConfirmPassword = (value) => {
    if (value === "") {
      setConfirmPasswordError("Confirm password required");
    } else if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
      setPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     // Reset the createError state

    // Validate all fields before submission
    validateFirstname(firstname);
    validateLastname(lastname);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmpassword);

    // Check if there are any errors
    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      setLoading(false);
      return;
    }

    // Attempt to create user
    try {
      const result = await create_user(
        email,
        password,
        confirmpassword,
        firstname,
        lastname
      );

      if (result.record) {
        navigate("/user_account/dashboard?registered=true");
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {/* Logo and Back Link */}
        <Link
          to="/"
          className={`flex items-center gap-2 self-center font-medium text-xl`}
          data-aos="zoom-out" data-aos-duration="500"
        >
          Tipo&apos;s Broker
        </Link>
        <Link
          to="/"
          className="text-gray-400 flex text-lg hover:text-teal hover:underline" data-aos="fade-right" data-aos-duration="2500"
        >
          <RxCaretLeft className="mt-0.5 text-2xl" />
          back to home
        </Link>

        

        {/* Registration Form */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label
                  htmlFor="firstname"
                  className=""
                  data-aos="fade-right" data-aos-duration="500"
                >
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Steph"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                    validateFirstname(e.target.value);
                  }}
                  onBlur={(e) => validateFirstname(e.target.value)}
                  maxLength={16}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full"
                  data-aos="fade-right" data-aos-duration="1000"
                />
                {firstnameError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {firstnameError}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="lastname"
                  className=""
                  data-aos="fade-left" data-aos-duration="500"
                >
                  Last Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Curry"
                  value={lastname}
                  maxLength={16}
                  onChange={(e) => {
                    setLastname(e.target.value);
                    validateLastname(e.target.value);
                  }}
                  onBlur={(e) => validateLastname(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 w-full"
                  data-aos="fade-left" data-aos-duration="1000"
                />
                {lastnameError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {lastnameError}
                  </div>
                )}
              </div>
            </div>

            {/* Email and Password Fields */}
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className=""
                  data-aos="fade-left" data-aos-duration="500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onBlur={(e) => validateEmail(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2"
                  data-aos="fade-left" data-aos-duration="1000"
                />
                {emailError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {emailError}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="password"
                  className=""
                  data-aos="fade-left" data-aos-duration="500"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  onBlur={(e) => validatePassword(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2"
                  data-aos="fade-left" data-aos-duration="1000"
                />
                {passwordError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {passwordError}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="confirm-password"
                  className=""
                  data-aos="fade-left" data-aos-duration="500"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  value={confirmpassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value);
                  }}
                  onBlur={(e) => validateConfirmPassword(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2"
                  data-aos="fade-left" data-aos-duration="1000"
                />
                {confirmPasswordError && (
                  <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
                    {confirmPasswordError}
                  </div>
                )}
              </div>

              {/* Sign Up Button */}
              {loading ? (
                <button className="w-full bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3 flex justify-center cursor-not-allowed">
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
                  className="w-full cursor-pointer bg-teal hover:bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3"
                  data-aos="zoom-in" data-aos-duration="1500"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Sign In Link */}
        <div
          className="text-center text-sm"
          data-aos="fade-up" data-aos-duration="1500"
        >
          Have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 text-blue-500"
          >
            Sign In
          </Link>
        </div>

        {/* Terms and Privacy Policy */}
        <div
          className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary animate-fade-down"
          style={{animationDelay: "0.2s"}}
        >
          By clicking register, you agree to our{" "}
          <Link to="#" className="text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-blue-500">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default RegistrationComp;