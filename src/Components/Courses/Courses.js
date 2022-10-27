import React, { useEffect, useState } from 'react';
import CourseCardShow from '../CourseCardShow/CourseCardShow';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    // load courses from the server 
    useEffect(() => {
        fetch("http://localhost:5000/allCourses")
            .then(result => result.json())
            .then(data => setCourses(data))
    }, [])


    return (

        <div className='row row-cols-1 row-cols-lg-2  row-cols-xxl-4 g-4 w-100 mt-3'>
            {
                courses.map(course => <CourseCardShow key={course.id} course={course}></CourseCardShow>)
            }
        </div>


    );
};

export default Courses;