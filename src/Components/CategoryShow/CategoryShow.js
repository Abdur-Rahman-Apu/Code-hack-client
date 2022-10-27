import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryShow = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(result => result.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5 text-center'>
            <h3>All courses</h3>
            {
                categories.map(category => <Link to={`/courses/course/${category.id}`}><p>{category.name}</p></Link>)
            }
        </div>
    );
};

export default CategoryShow;