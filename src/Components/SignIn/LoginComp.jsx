import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const LoginComp = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="/"
          className="flex items-center gap-2 self-center font-medium text-xl"
        >
          Tipo&apos;s Broker
        </a>
        <a
          href="/"
          className="text-gray-400 flex text-lg hover:text-black-spider hover:underline"
        >
          <RxCaretLeft className="mt-0.5 text-2xl" />
          back to home
        </a>
        <form>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              {/* Apple Login Button */}
              <button className="w-full h-20 flex items-center justify-center gap-3 bg-black rounded-xl text-white outline-1 outline-amber-900 hover:bg-gray-900 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8"
                >
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                    fill="currentColor"
                  />
                </svg>
                <span>Login with Apple</span>
              </button>

              {/* Google Login Button */}
              <button className="w-full h-20 flex items-center justify-center gap-3 bg-white text-gray-700 outline-1 outline-amber-900 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8"
                >
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span>Login with Google</span>
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">
                Or continue with
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="outline-1 outline-amber-900 rounded-2xl p-2"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline text-gray-600"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="outline-1 outline-amber-900 rounded-2xl p-2"
                />
              </div>
              <Link to="/user_account/dashboard">
                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white-rice text-lg font-semibold p-3 rounded-3xl mt-3"
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a
                href="/registration"
                className="underline underline-offset-4 text-blue-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </form>

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          By clicking Login, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
