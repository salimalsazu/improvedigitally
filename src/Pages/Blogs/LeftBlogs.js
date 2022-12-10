import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleBlogs from './SingleBlogs';

const LeftBlogs = () => {

    //fetch 
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://server-tau-gules.vercel.app/blogs');
            const data = await res.json();
            return data;
        }
    })

    console.log(blogs)

    return (
        <div className='flex justify-center items-center' >
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5' >
                {
                    blogs.map(blog => <SingleBlogs blog={blog} key={blog._id} ></SingleBlogs>)
                }

            </div >
        </div>
    );
};

export default LeftBlogs;