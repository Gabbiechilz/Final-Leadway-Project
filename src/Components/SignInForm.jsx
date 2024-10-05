import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-[25px] md:text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Sign in to your Account
          </h2>
          <h2 className="mt-5 text-center font-normal text-[12px] leading-2 tracking-tight text-[#000000]">
            Access your account to manage bookings, Connect with <br />{" "}
            professionals and track your services.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/ForgotPasswordPage"
                    className="font-semibold text-[#1565c0] hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  required
                  autoComplete="current-password"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" mt-10 flex w-full justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Dont have an account ?
            <Link
              to="/LoginPage"
              className="font-semibold leading-6 text-[#1a73e8] hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
