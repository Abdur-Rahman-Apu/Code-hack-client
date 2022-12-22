import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/Contexts';
import CourseCardShow from '../CourseCardShow/CourseCardShow';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const { loading } = useContext(AuthContext)

    // load courses from the server 
    useEffect(() => {
        fetch("https://code-hack-website-server-abdur-rahman-apu.vercel.app/allCourses")
            .then(result => result.json())
            .then(data => setCourses(data))
    }, [])

    if (loading) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (

        <div className='row ms-2 ms-md-0 row-cols-1 row-cols-lg-2  row-cols-xxl-4 g-4 w-100 mt-3'>
            {
                courses.map(course => <CourseCardShow key={course.id} course={course}></CourseCardShow>)
            }
        </div>


    );
};

export default Courses;