import React from 'react'

const PayButton = ({cartItems}) => {
    const handleCheckout = () => {
        console.log(cartItems)
    }
  return (
    <>
      <button onClick={() => handleCheckout()}>Book Now</button>  
    </>
  )
}

export default PayButton