import React from "react";
import { Link } from "react-router-dom";

const ProfileDetailForm = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Profile Details
          </h2>
          <h2 className="mt-5 text-center font-normal text-[12px] leading-2 tracking-tight text-[#000000]">
            Sign up quickly and easily, Provide your email, Create a secure{" "}
            <br /> password and Complete your profile to get started.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fullname
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your Fullname"
                  required
                  autoComplete="fullname"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phone number "
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="number"
                  placeholder="Enter Your Phone Number"
                  required
                  autoComplete="Phone number"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  placeholder="Select your city"
                  autoComplete="country-name"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option className="text-gray-100">Select your city</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" mt-10 flex w-full justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account ?
            <Link
              to="/SignInPage"
              className="font-semibold leading-6 text-[#1a73e8] hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailForm;
