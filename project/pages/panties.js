import { connect } from "mongoose";
import Link from "next/link";
import React from "react";
import Product from "../models/Product";

const Panties = ({ products }) => {
  const panties = products;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-bold text-gray-700 text-4xl mb-8">Panties</h1>
          <div className="flex flex-wrap -m-4">
            {panties.map((panty, ind) => (
              <Link key={ind} href={`/product/${panty.slug}`}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer hover:shadow-lg transition-all active:animate-pulse">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={panty.productImgURL}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Panties
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {panty.productTitle}
                    </h2>
                    <strong className="mt-1">${panty.productPrice}</strong>
                    <p className="mt-1"> SM, MD, L, XL, XXL</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  // * Again Connecting To MongoDB In ServerSideProps function
  connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`);

  //* Calling Data From Data-Base [Directly], With Out Fetch-API or Use-Effect Hook :D
  const products = await Product.find({ productCategory: "Panties" }); //* Fetching Products WithOut API,

  console.log(products);
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, //* will be passed to the page component as props
  };
}
export default Panties;
