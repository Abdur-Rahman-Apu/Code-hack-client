import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCardShow from '../CourseCardShow/CourseCardShow';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allCourses")
            .then(result => result.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);
    return (

        <div className='row row-cols-1 row-cols-lg-2 g-4 w-100 mt-3'>
            {
                courses.map(course => <CourseCardShow key={course.id} course={course}></CourseCardShow>)
            }
        </div>


    );
};

export default Courses;