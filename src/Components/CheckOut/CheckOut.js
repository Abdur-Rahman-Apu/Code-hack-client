import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const data = useLoaderData();

    const { title, image, price } = data;


    return (
        <div className='mt-5'>
            <h3 className='mb-4 text-center checkout-title'>Checkout page</h3>
            <h4 className='mb-3'>{title}</h4>
            <img src={image} className="img-fluid rounded" height={300} width={300} alt="img" />
            <p className='mt-3 fw-bold'>Price: ${price}</p>

            <button className='premium-btn'>Confirm</button>
        </div>
    );
};

export default CheckOut;