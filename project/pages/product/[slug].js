import React, { useContext, useState } from "react";
import Router, { useRouter } from "next/router";
import CartContext from "../Context/CartContext";
import { connect } from "mongoose";
import Product from "../../models/Product";
const Slug = ({ product }) => {
  const router = useRouter();
  const [PinCode, setPinCode] = useState(""); // Input-Tag 

  // * Initial State Would The First Available-Size, for-instance: "XL", "MD", ...
  const [SelectedOption, setSelectedOption] = useState(Object.keys(product.sizesAndColors)[0]); // * Size-Option-State
  const [SelectedColor, setSelectedColor] = useState(null); // * Color-Option-State Corresponding To The Given Size
  // setSelectedColor("Red")
  // Store Response From The Server 'GET' request through the fetch-method
  const [PinCodes, setPinCodes] = useState(null);

  const { slug } = router.query;

  // Importing the AddToCart (function) from the Context( Handling the States and Their Functions)
  const { AddToCart, clearCart, saveCart, setCart } = useContext(CartContext);

  const ChangeText = (e) => setPinCode(e.target.value); // * functon to handle & Track the [input-text-State]
  console.log(product);

  // 'GET' http://localhost:3000/api/pincodes -> "Returns An Object of Pin-codes(String)"
  const fetchPins = async () => {
    const response = await fetch("http://localhost:3000/api/pincodes");
    const json = await response.json();

    // success must be true to set the State (setPinCodes)
    if (json.success) {
      setPinCodes(json.PinCodes);
    }
  };
  const BuyNow = () => {
    clearCart();
    AddToCart(slug, product.productTitle, 1, "$343");
    Router.push("/checkout");
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
              src={`../${product.productImgURL}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.productTitle} ({SelectedColor} / {SelectedOption})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.productDescription}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  {product.sizesAndColors[SelectedOption].map((color) => (
                    <button
                      onClick={(e) => {
                        setSelectedColor(color);
                      }}
                      style={{ background: color }}
                      className={`border-4 ${
                        color === SelectedColor && "border-gray-400"
                      } ml-1 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  ))}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    {/* Another Approach! I Could Make It By OnChange prop On {select-element} and set the default value to value={"XL"} through props */}
                    <select
                      value={SelectedOption}
                      onChange={(e) => {
                        setSelectedOption(e.target.value);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10"
                    >
                      {Object.keys(product.sizesAndColors).map((size) => (
                       (product.sizesAndColors[size].length !== 0) ? <option>{size}</option>: <></>
                      ))}

                      {/* Another Approach Of Doing The Exact Same Thing... But I prefered To Above One  */}
                      {/* {Object.keys(product.sizesAndColors).map((size) => { 
                        if (product.sizesAndColors[size].length !== 0)
                          return (
                            <option
                              value={size}
                              onClick={(e) => {
                                setSelectedOption(e.target.value);
                              }}
                            >
                              {" "}
                              {size}
                            </option>
                          );
                      })} */}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.productPrice}
                </span>
                <button
                  onClick={() => {
                    BuyNow();
                  }}
                  className="flex ml-10 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    AddToCart(
                      slug,
                      `${product.productTitle} (${SelectedColor} / ${SelectedOption})` ,
                      1,
                      product.productPrice
                    );
                  }}
                  className="flex ml-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add To Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center mt-4">
                <input
                  onChange={ChangeText}
                  value={PinCode}
                  placeholder="Enter Your City-Zip-Code"
                  className="h-8 p-2 border-2 border-red-300"
                  type="text"
                />
                <button
                  className="flex ml-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  onClick={fetchPins}
                >
                  Check
                </button>
              </div>

              {/* If The PinCodes is not 'null' then, print one of two messages, either we deliver our services there or not! */}
              {PinCodes !== null ? ( // PinCodes-State-Variable Must Have 'Array-Of-Codes(String)' To Move Further
                PinCodes.includes(PinCode) ? ( // Returns 'Boolean', for 'true' The Entered Code Must Exist In The 'Array-Of-Codes(String)'
                  <p className="text-green-700">
                    Yes! :) We Deliver Our Services Here
                  </p>
                ) : (
                  <p className="text-red-700">
                    {" "}
                    Sorry! Our Service Isn't Available Here
                  </p>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  await connect(
    "mongodb+srv://HamzaJavedShaikh:1212@cluster0.blo8xq3.mongodb.net/?retryWrites=true&w=majority"
  );

  const product = await Product.findOne({ slug: context.query.slug }); // Fetching Products WithOut API,
  console.log(product);

  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  };
}

export default Slug;
