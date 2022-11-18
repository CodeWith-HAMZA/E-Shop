import React from 'react'

const Order = () => {
  const orderItems = Array.from({ length: 5 })
  return (<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 class="text-sm mb-2 title-font text-gray-500 tracking-widest">Shopping Wopping</h2>
          <h1 class="text-gray-900 text-3xl title-font font-semibold mb-4">Order Id: 3434928</h1>
          <div class="flex mb-4">
            <a class="flex-grow font-semibold text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Item Description</a>
            <a class="flex-grow font-semibold border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
            <a class="flex-grow font-semibold border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
          </div>
          <p class="leading-relaxed mb-4"> stropub blue bottle austin listicle pour-over, neutra jean.</p>

          {orderItems.map(() => <div class="flex justify-between px-2 border-t border-gray-200 py-2">
            <strong class="text-gray-500">Hoody</strong>
            <strong class="text-gray-500">12</strong>
            <strong class="text-gray-900">$343</strong>
          </div>
          )}
          <div class="flex mt-6">
            <span class="title-font font-medium text-2xl text-gray-900"><strong>Subtotal: {`$58.00`}</strong></span>
            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Track Order</button>

          </div>
        </div>
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
      </div>
    </div>
  </section>
  )
}

export default Order