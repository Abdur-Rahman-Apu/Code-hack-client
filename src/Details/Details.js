import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaDownload } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { MdReviews, MdOutlineWork } from 'react-icons/md';
import './Details.css'

const Details = () => {
    const data = useLoaderData();

    const { id, image, contents, language, price, rating, short_description, title, tutor, enrolled } = data;


    const { name, profession, reviews, location, info, tutor_img } = tutor;

    const { Course_content, description, learn, requirements
    } = contents;
    console.log(data);
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-between'>
                <h3>{title}</h3>
                <FaDownload />
            </div>

            <img src={image} className="rounded img-fluid my-3" alt="img" />

            <p>{short_description}</p>

            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column '>
                    <p className='fw-bold m-0'>
                        {rating}
                    </p>
                    <div >
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>

                <div>
                    <p> <span className='fw-bold'>Enrolled:</span> {enrolled} students</p>
                </div>
            </div>

            <div className='mt-4'>
                <p><span className='fw-bold'>Mentor:</span> {name}</p>
            </div>

            <hr />

            <div className='mb-4'>
                <h3>Descriptions</h3>

                <div>
                    {
                        description
                    }
                </div>
            </div>

            <div>
                <h3>Outcomes</h3>

                <div>
                    {
                        learn.map(topic => <li>{topic}</li>)
                    }
                </div>
            </div>


            <div className='mt-5'>
                <h4>Course Contents</h4>

                <ul className='list-group mt-3'>
                    {
                        Course_content.map(content => <li className='list-group-item'>{content}</li>)
                    }
                </ul>
            </div>

            <div className='mt-4'>
                <h3>Requirements</h3>
                <div className='mt-4'>
                    {requirements.map(req => <li>{req}</li>)}
                </div>
            </div>

            <div className='mt-3'>
                <h3 className='mt-5'>Mentor:</h3>

                <div className='d-flex align-items-center mt-5'>
                    <img src={tutor_img} className=" author-img img-fluid rounded-pill" alt="img" />

                    <div className='ms-5'>
                        <span className='fw-bold'>{name}</span>
                        <p>{info}</p>
                    </div>
                </div>


                <div className='mt-5'>
                    <p><FcRating /> {tutor.rating}</p>
                    <p><MdReviews /> {reviews} reviews</p>
                    <p><MdOutlineWork /> {profession} </p>
                </div>
            </div>

            <div>
                <h3>Price:</h3>
                <span>${price}</span>
            </div>

            <div>
                <Link to={`/courses/cart/course/${id}`}><button className='premium-btn my-3'>Get premium access</button></Link>
            </div>
        </div>
    );
};

export default Details;