import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Alerts } from "../Utils/constants";
import Alert from "./Components/Alert";
import CartContext from "./Context/CartContext";

const Login = () => {
  const [ServerResponse, setServerResponse] = useState(null);
  const email = useRef(),
    password = useRef();
  const { ShowAlert, setShowAlert, AlertType, setAlertType, showAlert, User } =
    useContext(CartContext);
  const router = useRouter();

  // * If User Has Token Then Don't Give Access To This Route For The User
  useEffect(() => {
    if (User.token) {
      router.push("/"); // * Throwing The User To '/' Each-Time Whenever He Tries To Go '/login'
    }
  });

  const Submit = async (e) => {
    e.preventDefault();

    try {
 
      // * Axios-POST-Request -login-api
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
        email: email.current.value,
        password: password.current.value,
      });

      setServerResponse(data);
      showAlert("Success");
      localStorage.setItem("token", data.token);

      setTimeout(() => {
        router.push("/");
      }, 2000);
      console.log(data);

    } catch ({ response: { data } }) {
      setServerResponse(data);  // * Holding The Response-Object From The "Server"
      showAlert("Error");

      console.log(data);
    }
  };

  return (
    <>
      <div className="h-[4rem] ">
        {ShowAlert &&
          Alerts.map(
            (alert) =>
              // * If The Required-AlertType is Found In The Array Of Multiple Alert-Types, Then Render That Particular Alert-Type
              AlertType === alert.AlertType && (
                <Alert
                  Variant={alert.Variant}
                  // * Showing Status And Message From The Server As Response
                  Heading={ServerResponse.status} 
                  Message={ServerResponse.message}
                />
              )
          )}
      </div>
      <div className="flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link href={"/signup"}>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  ref={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href={"/recoverpassword"}>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:text-red-500"
                  >
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={Submit}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
