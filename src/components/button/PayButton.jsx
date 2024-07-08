import axios from 'axios';
import React from 'react';

const PayButton = ({ amount }) => {
    const handleCheckout = () => {
        axios.post('http://localhost:5024/stripe/create-checkout-session', { amount })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <button className='p-3 hover:bg-[--color-blue-800] text-white' onClick={handleCheckout}>Book Now</button>
    );
};

export default PayButton;
