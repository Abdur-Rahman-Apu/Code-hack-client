import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Courses from '../Courses/Courses';


const Home = () => {



    const courses = useLoaderData();


    return (
        <div>
            <Carousel></Carousel>

            <div className='mt-5 ms-4'>
                <h3>Courses</h3>

                <div>
                    <Courses></Courses>
                </div>
            </div>
        </div>
    );
};

export default Home;