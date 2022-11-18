import { connect } from "mongoose";
import Link from "next/link";
import React from "react";
import Product from "../models/Product";

const Tshirts = ({ products }) => {
  // const tshirts = products.filter((elem) => elem.productCategory == "Tshirts");
  const tshirts = products;
  console.log(tshirts);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-bold text-gray-700 text-4xl mb-8">Tshirts</h1>
          <div className="flex flex-wrap -m-4">
            {tshirts.map((tshirt, ind) => (
              <Link key={ind} href={"/product/" + tshirt.slug}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer hover:shadow-lg transition-all active:animate-pulse">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="
                        max-w-xs hover:scale-110 transition duration-300 ease-in-out
                        object-cover object-center w-full h-full block"
                      src={tshirt.productImgURL}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirts
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {" "}
                      {tshirt.productTitle}
                    </h2>
                    <strong className="mt-1">${tshirt.productPrice}</strong>
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
export async function getServerSideProps() {
  await connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`);

  const products = await Product.find({ productCategory: "Tshirts" }); // Fetching Products WithOut API,

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
export default Tshirts;
