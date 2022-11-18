import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import CartContext from "./Context/CartContext";

const Checkout = () => {
  const {
    Cart,
    setCart,
    increament,
    decreament,
    clearCart,
    clearParticularItem,
  } = useContext(CartContext);
  const ref = useRef();
  return (
    <>
      {/* <div id="Checkout" className="container m-auto">
        <h1 className='text-2xl font-semibold text-center m-2'>CheckOut</h1> */}
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-900">
              Checkout
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div class="  md:w-[85%] mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* This is targeted by the 'ref' in react the 'useRef-hook' is the way to Target the JSX element unlike 'document.getelementbyid' , 'query selector' etc... */}
          <div
            id=" "
            ref={ref}
            className="w-[100%] mb-8 bg-white p-10 shadow-sm"
          >
            <ol type="1" className="mt-4 ">
              <h4 className="text-3xl text-center font-semibold mb-12">
                Check Your Items
              </h4>

              {/* Cart Must Carry some stuff to display it else, it will display a Message */}
              {Cart.length !== 0 ? (
                Cart.map((cartItem, ind) => {
                  return (
                    <li className="flex justify-between items-center px-4 py-4 m-2 bg-gray-100">
                      <div className="itemInfo flex justify-center space-x-4 pl-4">
                        <strong id="itemNumber">{ind + 1}</strong>
                        <strong id="itemTitle">{cartItem["item"]}</strong>
                      </div>

                      <div
                        id="quantityManipulator"
                        className="flex justify-center items-center space-x-2"
                      >
                        <button
                          onClick={() => {
                            increament(ind);
                          }}
                          className="bg-slate-200 px-[0.6rem] pb-1"
                        >
                          {" "}
                          +{" "}
                        </button>
                        <strong className="">{cartItem["quantity"]}</strong>
                        <button
                          onClick={() => {
                            decreament(ind);
                          }}
                          className="bg-slate-200 px-3 pb-1"
                        >
                          {" "}
                          -{" "}
                        </button>
                        {/* <div id="clearCartItem" onClick={() => { clearParticularItem(ind) }} className='py-4 px-4 cursor-pointer'>X</div> */}
                      </div>
                      <strong>
                        $
                        {Number.parseInt(cartItem["price"]) *
                          Number.parseInt(cartItem["quantity"])}
                      </strong>
                    </li>
                  );
                })
              ) : (
                <p className="p-2">Select Items</p>
              )}
            </ol>

            {Cart.length !== 0 ? (
              <>
                <Link // throws the user to the '/checkout' checkout-page
                  href={"/order"}
                >
                  <button
                    onClick={() => {}} // toggling the [Tailwind-Class]- "translate-x-full"
                    className="m-2 px-5 py-2 bg-gray-800 text-white hover:text-gray-100 hover:bg-gray-900 "
                  >
                    Pay Here
                  </button>
                </Link>
                {/* <button
                    onClick={() => { clearCart() }}  // clearing the cart on 'click'
                    className='m-2 p-2 text-gray-800 bg-gray-100 hover:bg-gray-50'>Clear Cart</button> */}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default Checkout;
