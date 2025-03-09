import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { RxCaretLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../lib/pocketbase";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    if (email === "") {
      setEmailError("email required");
      setLoading(false);
      return;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password required");
      setLoading(false);
      return;
    } else {
      setPasswordError("");
    }

    if (!emailError && !passwordError) {
      try {
        const result = await login(email, password);

        if (result.record) {
          navigate("/user_account/dashboard");
        }
      } catch (error) {
        console.log(error);
        setLoginError("Incorrect login details");
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className={`flex items-center gap-2 self-center font-medium text-xl animate-zoom-out`}
          style={{ animationDelay: "0.1s" }}
        >
          Tipo&apos;s Broker
        </Link>
        <Link
          to="/"
          className="text-gray-400 flex text-lg hover:text-teal hover:underline animate-fade-right" style={{ animationDelay: "0.8s" }}
        >
          <RxCaretLeft className="mt-0.5 text-2xl" />
          back to home
        </Link>
        {loginError && (<div className="text-red-500 p-2 bg-light-gray mt-1 mb-1 left-0 font-medium rounded-lg text-xl">{loginError}</div>)}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="email" className="animate-fade-left" style={{ animationDelay: "0.2s" }}>Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 animate-fade-left" style={{ animationDelay: "0.3s" }}
                />
                {emailError && (<div className="text-red-500 font-medium p-2 bg-light-gray rounded-xl mt-1 mb-1">{emailError}</div>)}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password" className="animate-fade-left" style={{ animationDelay: "0.4s" }}>Password</label>
                  <Link
                    to="/"
                    className="ml-auto text-sm underline-offset-4 hover:text-teal hover:underline text-gray-600 animate-fade-right" style={{ animationDelay: "0.8s" }}
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2 animate-fade-left" style={{ animationDelay: "0.5s" }}
                />
                {passwordError && (<div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">{passwordError}</div>)}
              </div>

              {loading ? (
                <button
                  className="w-full cursor-pointer bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3 flex justify-center"
                >
                  <svg className="mr-3 size-8 text-light-gray animate-spin" viewBox="0 0 24 24">
                    <FaSpinner />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-teal hover:bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3 animate-zoom-in" style={{ animationDelay: "0.6s" }}
                >
                  Sign In
                </button>
              )}
            </div>
            <div className="text-center text-sm animate-fade-down" style={{ animationDelay: "0.8s" }}>
              Don&apos;t have an account?{" "}
              <Link
                to="/registration"
                className="underline underline-offset-4 text-blue-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary animate-fade-down" style={{ animationDelay: "0.8s" }}>
          By clicking Login, you agree to our{" "}
          <Link to="/" className="text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/" className="text-blue-500">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginComp;

