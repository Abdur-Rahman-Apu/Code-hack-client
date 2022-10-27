import React from 'react';
import { useEffect, useState } from 'react';

const CategoryShow = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(result => result.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5 text-center'>
            {
                categories.map(category => <p>{category.name}</p>)
            }
        </div>
    );
};

export default CategoryShow;