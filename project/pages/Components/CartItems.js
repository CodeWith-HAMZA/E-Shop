import Link from 'next/link';
import React, { useContext, useRef, useState } from 'react'

import CartContext from '../Context/CartContext'
const CartItems = ({ dataFromChildToParent, toggleCart }) => {

  const { Cart, setCart, increament, decreament, clearCart, clearParticularItem } = useContext(CartContext);


  const ref = useRef();


  return (
    <>

    </>
  )
}

export default CartItems;