import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './CourseCardShow.css';

const CourseCardShow = ({ course }) => {
    const { id, image, title, rating, price, tutor, language } = course;
    const { name } = tutor;


    return (

        <div className='col'>
            <div className="card h-100">
                <img src={image} className="card-img-top" height={200} alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text "><span className='fw-bold title-style'>Mentor: </span>{name}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='fw-bold rating'>{rating}</span>
                        <div className='icon-color'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <p className='fw-bold'>${price}</p>

                        <div className='d-flex align-items-center fw-bold'>
                            <GrLanguage className='me-2' />
                            {language}
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to={`/courses/course/${id}`}><button className='card-btn'>Explore details</button></Link>
                </div>
            </div>
        </div>


    );
};

export default CourseCardShow;