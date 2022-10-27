import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryShow from '../Components/CategoryShow/CategoryShow';


const CourseLayout = () => {
    return (
        <div className='row w-100'>

            <div className='col-md-4 d-none d-md-block'>
                <CategoryShow></CategoryShow>
            </div>

            <div className='col-12  col-md-8 p-5 p-md-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;