import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const RegistrationComp = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {/* Logo and Back Link */}
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

        {/* Registration Form */}
        <form>
          <div className="grid gap-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Steph"
                  required
                  className="outline-1 outline-dark-blue focus:outline-teal rounded-2xl p-2 w-full"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Curry"
                  required
                  className="outline-1 outline-dark-blue focus:outline-teal rounded-2xl p-2 w-full"
                />
              </div>
            </div>

            {/* Email and Password Fields */}
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="outline-1 outline-dark-blue focus:outline-teal rounded-2xl p-2"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="outline-1 outline-dark-blue focus:outline-teal rounded-2xl p-2"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  required
                  className="outline-1 outline-dark-blue focus:outline-teal rounded-2xl p-2"
                />
              </div>

              {/* Sign Up Button */}
              <Link to="/user_account/dashboard">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-teal hover:bg-darker-teal text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="text-center text-sm">
          Have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 text-blue-500"
          >
            Sign In
          </Link>
        </div>

        {/* Terms and Privacy Policy */}
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
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
