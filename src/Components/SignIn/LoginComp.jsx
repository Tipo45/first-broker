import { FaSpinner } from "react-icons/fa";
import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const LoginComp = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium text-xl"
        >
          Tipo&apos;s Broker
        </Link>
        <Link
          to="/"
          className="text-gray-400 flex text-lg hover:text-teal hover:underline"
        >
          <RxCaretLeft className="mt-0.5 text-2xl" />
          back to home
        </Link>
        <form>
          <div className="grid gap-6">
            
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <Link
                    to="/"
                    className="ml-auto text-sm underline-offset-4 hover:text-teal hover:underline text-gray-600"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="outline-1 outline-dark-blue hover:outline-teal focus:outline-teal rounded-2xl p-2"
                />
              </div>
              <Link to="/user_account/dashboard">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-teal hover:bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3"
                > <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"><FaSpinner />
    
                </svg>
                  Sign In
                </button>
              </Link>
            </div>
            <div className="text-center text-sm">
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

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
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
