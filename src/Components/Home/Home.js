import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Courses from '../Courses/Courses';
import './Home.css';


const Home = () => {



    const courses = useLoaderData();


    return (
        <div>
            <Carousel></Carousel>

            <div className='mt-5 ms-4'>
                <h3 className='courses-home-part-title'>COURSES</h3>

                <div className='courses-home-part'>
                    <Courses></Courses>
                </div>
            </div>
        </div>
    );
};

export default Home;