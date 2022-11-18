import { connect } from "mongoose";
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
// import mongoose from 'mongoose';
const Mugs = ({ products }) => {
  // Render Those Objects or Elements, Those Have "Mugs" Category
  // const mugs = products.filter((elem) => elem.productCategory == "Mugs");
  const mugs = products;

  console.log(mugs);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-bold text-gray-700 text-4xl mb-8">Mugs</h1>
          <div className="flex flex-wrap -m-4">
            {mugs.map((mug, ind) => (
              <Link key={ind} href={"/product/" + mug.slug}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer hover:shadow-lg transition-all active:animate-pulse">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={mug.productImgURL}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Mugs
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {mug.productTitle} {ind}
                    </h2>
                    <strong className="mt-1"> ${mug.productPrice} </strong>
                    <p className="mt-1"> SM, MD, L, XL, XXL</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  await connect(
    `${process.env.NEXT_PUBLIC_MONGO_URI}`
  );

  const products = await Product.find({productCategory: "Mugs" }); // Fetching Products WithOut API,

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Mugs;
