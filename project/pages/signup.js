import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Alert from "./Components/Alert";
import { Alerts } from "../Utils/constants";
import CartContext from "./Context/CartContext";
import { useRouter } from "next/router";

const Signup = () => {
  const [ServerResponse, setServerResponse] = useState({});

  // * Getting States And States-Handling Functions From Context
  const {
    ShowAlert,
    setShowAlert,
    AlertType,
    setAlertType,
    showAlert,
    User,
    setUser,
  } = useContext(CartContext);

  const name = useRef(),
    email = useRef(),
    password = useRef();

  const router = useRouter();
  // * Most Of The Alert-Functionality We've Improved MayBe Some Little Things Are To Be Fixed
  // ! Enhance or change The Multiples Alerts Logic Approach Further

  useEffect(() => {
    if (User.token) {
      router.push("/");
    }
  });

  const Submit = async (e) => {
    e.preventDefault();

    // const data = await postData("http://localhost:3000/api/signup", {
    //   name: name.current.value,
    //   email: email.current.value,
    //   password: password.current.value,
    // });

    // name.current.value = ""

    /*---------- But Prefer To Use axios.post(), as it's much cleaner then below one -----------*/
    try {
      // * Axios-POST-Request -signup-api
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/signup`,
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        }
      );
      setServerResponse(data); // * Holding Response From Server

      showAlert("Success"); // * From Context, function To The Render The Given-Alert According To The Given [Alert-Type]

      localStorage.setItem("token", data.token); // * If User-Successfully Signup (Registered), set the auth-token in the user's "local-storage"

      setTimeout(() => {
        router.push("/"); // * after login throw the user '/' home-page
      }, 2000);

      console.log(data);
    } catch ({ response: { data } }) {
      // * Chaining Destructing Syntax

      setServerResponse(data);

      // console.log(error.response.data);
      showAlert("Error"); // * From Context
      console.log(data);
    }

    /*--------- Another Way Of Post-Req By Calling axios as function */
    //  const {data} = await axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/api/signup',
    //     data: options
    //   })
    //   console.log(data)

    // name.current.value = "uu";
    // email.current.value = "u";
    // password.current.value = "u";
  };

  // async function postData(url = "", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }

  return (
    <>
      {/* Alert Container To Prevent The Layout Shift   */}
      <div className="h-[4rem] ">
        {ShowAlert &&
          Alerts.map(
            (alert) =>
              // * If The Required-AlertType is Found In The Array Of Multiple Alert-Types, Then Render That Particular Alert-Type
              AlertType === alert.AlertType && (
                <Alert
                  // * Showing Status And Message From The Server As Response
                  Variant={alert.Variant}
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
              Sign Up your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link href={"/login"}>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Sign In
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only"></label>
                <input
                  id="email-address"
                  ref={name}
                  name="name"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  ref={email}
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
            </div>

            <div>
              <button
                onClick={Submit}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
// export async function getServerSideProps(context) {

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Signup;
