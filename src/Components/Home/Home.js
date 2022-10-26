import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Courses from '../Courses/Courses';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {



    const courses = useLoaderData();


    return (
        <div>
            <Carousel></Carousel>

            <div className='mt-5 ms-4'>
                <h3>Courses</h3>

                <div className='row row-cols-1 row-cols-lg-3 g-4 w-100 mt-3'>
                    {
                        courses.map(c => <Courses key={c.id} course={c}></Courses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;