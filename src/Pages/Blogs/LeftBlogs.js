import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleBlogs from './SingleBlogs';

const LeftBlogs = () => {

    //fetch 
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            const data = await res.json();
            return data;
        }
    })

    console.log(blogs)

    return (
        <div className='flex justify-center items-center' >
            <div className='grid grid-cols-2  gap-5' >
                {
                    blogs.map(blog => <SingleBlogs blog={blog} key={blog._id} ></SingleBlogs>)
                }

            </div >
        </div>
    );
};

export default LeftBlogs;