import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryShow.css';

const CategoryShow = () => {

    const [categories, setCategories] = useState([]);

    //load categories 

    useEffect(() => {
        fetch('https://code-hack-website-server-abdur-rahman-apu.vercel.app/categories')
            .then(result => result.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='mt-5 text-center category-section'>
            <h3 className='category-title text-uppercase my-4'>All courses</h3>
            {
                categories.map(category => <Link to={`/courses/course/${category.id}`}><p>{category.name}</p></Link>)
            }
        </div>
    );
};

export default CategoryShow;