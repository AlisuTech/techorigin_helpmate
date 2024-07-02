// import { useState } from 'react';
// import spatula from './spatula.jpg';
// import StripeContainer from './StripeContainer';
// import './Appointment.css'

// function Final() {
// 	const [showItem, setShowItem] = useState(false);
// 	return (
// 		<div className='App'>
// 			<h1>The Spatula Store</h1>
// 			{showItem ? (
// 				<StripeContainer />
// 			) : (
// 				<>
// 					<h3>$10.00</h3>
// 					<img src={spatula} alt='Spatula' />
// 					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
// 				</>
// 			)}
// 		</div>
// 	);
// }

// export default Final;

import React, { useState, useEffect } from "react";
import "./Appointment.css";

const ProductDisplay = () => (
	<section>
	  <div className="product">
		<img
		  src="https://i.imgur.com/EHyR2nP.png"
		  alt="The cover of Stubborn Attachments"
		/>
		<div className="description">
		<h3>Stubborn Attachments</h3>
		<h5>$20.00</h5>
		</div>
	  </div>
	  <form action="/create-checkout-session" method="POST">
		<button type="submit">
		  Checkout
		</button>
	  </form>
	</section>
  );
  
  const Message = ({ message }) => (
	<section>
	  <p>{message}</p>
	</section>
  );
  
  export default function Final() {
	const [message, setMessage] = useState("");
  
	useEffect(() => {
	  // Check to see if this is a redirect back from Checkout
	  const query = new URLSearchParams(window.location.search);
  
	  if (query.get("success")) {
		setMessage("Order placed! You will receive an email confirmation.");
	  }
  
	  if (query.get("canceled")) {
		setMessage(
		  "Order canceled -- continue to shop around and checkout when you're ready."
		);
	  }
	}, []);
  
	return message ? (
	  <Message message={message} />
	) : (
	  <ProductDisplay />
	);
  }