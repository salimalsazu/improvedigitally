import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';

const LatestPost = () => {
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
        <div className='flex flex-col p-5 gap-5 border mt-10' >
            <h1 className='text-3xl font-bold nb-5' >Latest Post</h1>
            {
                blogs.map(blog => <SinglePost blog={blog} key={blog._id} ></SinglePost>)
            }
        </div>
    );
};

export default LatestPost;