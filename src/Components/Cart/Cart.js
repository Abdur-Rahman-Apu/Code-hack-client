import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const data = useLoaderData();

    const { title, image, price } = data;


    return (
        <div className='mt-5'>
            <h3 className='mb-4 text-center'>Cart page</h3>
            <h4 className='mb-3'>{title}</h4>
            <img src={image} height={200} alt="img" />
            <p className='mt-3'>Price: ${price}</p>

            <button className='premium-btn'>Confirm</button>
        </div>
    );
};

export default Cart;