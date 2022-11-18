import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsCalendarMonth, BsCart2, BsCart3 } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import CartItems from "./CartItems";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

const Nav = ({ Title }) => {
  // * Referencing The [Cart-Element], means Holding The Refrence;
  const CartReference = useRef(); // * Just-Like We Used To Select In JS, document.getElement, document.querySelector etc...

  const UserProfile_MenuOptions = useRef();

  // * Importing Next-Router
  const router = useRouter();

  // * Getting State-Variables, State-Variables-Setters, And Functions From The [Context]
  const {
    Cart,
    setCart,
    increament,
    decreament,
    clearCart,
    clearParticularItem,
    User,
    setUser,
  } = useContext(CartContext);

  useEffect(() => {
    // * Getting auth-token Of [Logged-In-User]
    const token = localStorage.getItem("token");

    // * If token found, set the State To That Token (from LC)
    if (token) setUser({ token });
    else setUser({token: null});
    // * Is Ny Boht Sar Khapayaa -_-
    // * ReRendering Without Any Dependency means "useEffect(() => {code...});" -Makes The Next-Router Disabled or Can't Able To Work ;(
    // * Or Dependency Do To Bhi Icon-Swap Nhi Horrhy Thy.. phr Stack-Over-Flow K According, Aisee Situation Men
    // * Dependency Array Mein "router.pathname" Daal Do, & Normally States Update Karo.. :) It Works For Me..!
  }, [router.pathname]);

  function toggleCart(e) {
    // * Carrying the [Cart-Container] '#Cart' "JSX-Element"
    const cart = CartReference.current;

    // * If cart contains the class 'translate-x-full' then remove, but if not then add that class
    if (cart.classList.contains("translate-x-full"))
      cart.classList.remove("translate-x-full");
    else cart.classList.add("translate-x-full");
  }

  // * Toggle The User-Info Menu-Element From or To "display-none & display-flex"
  function toggleUser(e) {
    if (UserProfile_MenuOptions.current.style.display === "flex") {
      UserProfile_MenuOptions.current.style.display = "none";
    } else {
      UserProfile_MenuOptions.current.style.display = "flex";
    }
  }

  function handleLogout(e) {
    localStorage.removeItem("token");
    setTimeout(() => {
      router.push("/login");  // * throw the user to '/login' after 0.4 secs 
    }, 400);
  }

  return (
    <>
      <header className="h-20  flex justify-center  text-gray-600 body-font  ">
        <div className="w-[100%] z-10 fixed container mx-auto flex bg-white shadow-sm flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">{Title}</span>
            </a>
          </Link>
          <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"}>
              <a className="mr-5 hover:text-gray-900">Tshirts</a>
            </Link>

            <Link href={"/hoodies"}>
              <a className="mr-5 hover:text-gray-900">Hoodies</a>
            </Link>

            <Link href={"/panties"}>
              <a className="mr-5 hover:text-gray-900">Panties</a>
            </Link>

            <Link href={"/mugs"}>
              <a className="mr-5 hover:text-gray-900">Mugs</a>
            </Link>
          </nav>

          {/* Button- Responsible for Showing Up The Features For Logged-In User */}
          {(User.token && (
            <button
              onClick={toggleUser}
              className="rounded-3xl mr-5 text-gray-900 bg-gray-50 px-3 py-3 hover:bg-gray-100 cursor-pointer"
            >
              <FaUserCircle />
            </button>
          )) || (
            <Link href={"/login"}>
              <a className=" transition-all mr-5 text-gray-900 bg-gray-50 px-4 py-1 hover:bg-gray-100">
                Login
              </a>
            </Link>
          )}

          {/* Button- Responsible for the toggling the cart-Side-Bar  */}
          <button
            onClick={() => {
              toggleCart();
            }}
            className="text-xl inline-flex items-center bg-gray-100 border-0 ml-2 mr-4 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0"
          >
            <BsCart3 />
          </button>
        </div>
        {/* User-Menu */}
        <div
          ref={UserProfile_MenuOptions}
          onClick={(e)=>{
            console.log(".yhutnoesu", UserProfile_MenuOptions.current)
            setTimeout(() => {
              UserProfile_MenuOptions.current.style.display ="none"
            }, 200);
          }}
          className="
          bg-white
          shadow-md 

          hidden
          fixed

          justify-center
          flex-col
          h-[6rem] w-36
          gap-4 
          
          rounded text-sm

        
          sm:top-[7rem] 
          sm:left-[23.4rem] 

          md:left-[37.4rem] 
          md:top-[4rem]

          lg:left-[52.4rem]
          xl:left-[69.4rem] 
          2xl:left-[95rem]
          z-50
          "
        >
          <ul>
            <li className="hover:bg-gray-100 hover:text-red-500 px-2 py-1 rounded">
              <Link className="block" href={"/account"}>
                Your Account
              </Link>
            </li>
            <li className="hover:bg-gray-100 hover:text-red-500 px-2 py-1 rounded2">
              <Link className="block" href={"/orders"}>
                Orders
              </Link>
            </li>
            <li
              onClick={handleLogout}
              className="hover:bg-gray-100 hover:text-red-500 px-2 py-1 rounded2"
            >
              <button className="block">Logout</button>
            </li>
          </ul>
        </div>
      </header>

      {/* This is targeted by the 'ref' in react the 'useRef-hook' is the way to Target the JSX element unlike 'document.getelementbyid' , 'query selector' etc... */}
      <div
        id="Cart"
        ref={CartReference}
        className="z-[20] w-[100%] md:w-[60%] h-[50rem]  bg-white absolute right-0 top-0 p-10 transition-all  translate-x-full shadow-xl "
      >
        {/* Button is responsible to remove an item from the CART-List */}
        <button
          className="text-xl inline-flex items-center text-gray-600 bg-gray-100 border-0  py-3 px-4 focus:outline-none hover:bg-gray-200 rounded mt-4 mr-9"
          onClick={toggleCart}
        >
          <ImCross />
        </button>

        <ol type="1" className="mt-4 ">
          <h4 className="text-xl text-center font-bold mb-4">
            Items In Your Cart
          </h4>

          {/* Cart Must Carry some stuff to display it else, it will display a Message */}
          {Cart.length !== 0 ? (
            Cart.map((cartItem, ind) => {
              return (
                <li className="flex justify-between items-center px-2 py-4 m-2 bg-gray-100">
                  <div className="itemInfo flex justify-center space-x-4 pl-4">
                    <span id="itemNumber">{ind + 1}</span>
                    <span id="itemTitle">{cartItem["item"]}</span>
                  </div>
                  <strong>
                    $
                    {Number.parseInt(cartItem["price"]) *
                      Number.parseInt(cartItem["quantity"])}
                  </strong>
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
                    <span className="">{cartItem["quantity"]}</span>
                    <button
                      onClick={() => {
                        decreament(ind);
                      }}
                      className="bg-slate-200 px-3 pb-1"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div
                      id="clearCartItem"
                      onClick={() => {
                        clearParticularItem(ind);
                      }}
                      className="py-4 px-4 cursor-pointer"
                    >
                      X
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p className="p-2">No Items :( In Your Bucket! </p>
          )}
        </ol>

        {Cart.length !== 0 ? (
          <>
            <Link // throws the user to the '/checkout' checkout-page
              href={"/checkout"}
            >
              <button
                onClick={() => {
                  toggleCart();
                }} // toggling the [Tailwind-Class]- "translate-x-full"
                className="m-2 p-2 bg-gray-800 text-white hover:text-gray-100 hover:bg-gray-900 "
              >
                Proceed To Checkout
              </button>
            </Link>
            <button
              onClick={() => {
                clearCart();
              }} // clearing the cart on 'click'
              className="m-2 p-2 text-gray-800 bg-gray-100 hover:bg-gray-50"
            >
              Clear Cart
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Nav;
