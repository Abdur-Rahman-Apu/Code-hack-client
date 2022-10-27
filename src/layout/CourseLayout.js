import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryShow from '../Components/CategoryShow/CategoryShow';


const CourseLayout = () => {
    return (
        <div className='row'>

            <div className='col-4'>
                <CategoryShow></CategoryShow>
            </div>

            <div className='col-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;