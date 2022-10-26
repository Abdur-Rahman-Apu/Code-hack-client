import React from 'react';
import { Link } from 'react-router-dom';
import Brand1 from '../../assets/Brand1.jpg';
import Brand2 from '../../assets/Brand2.jpg';
import './Carousel.css'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <div className='d-flex flex-column-reverse flex-lg-row justify-content-between'>
                        <div className='first-item-left-side p-5 d-flex justify-content-center align-items-center'>
                            <figure className='text-center'>
                                <blockquote className="blockquote">
                                    <h3>KNOWLEDGE DOES NOT COME, BUT YOU HAVE TO GO TO IT </h3>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Imam Malik
                                </figcaption>
                            </figure>
                        </div>
                        <img src={Brand1} className="d-block  carousel-item-img" alt="Brand1 img" />
                    </div>
                </div>
                <div className="carousel-item active">
                    <div className='d-flex flex-column-reverse flex-lg-row justify-content-between'>
                        <div className='second-item-left-side p-5  d-flex justify-content-center align-items-center'>
                            <div className='text-center'>
                                <h3>CODE HACK IS A DISTANCE LEARNING PLATFORM</h3>
                                <p>Explore your desireable courses</p>

                                <Link to='/courses'><button className='explore-course-btn'>EXPLORE COURSES</button></Link>
                            </div>
                        </div>
                        <img src={Brand2} className="d-block carousel-item-img" alt="Brand2 img" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;