import React from 'react';
import GrowYourBuisness from './GrowYourBuisness';
import LatestPost from './LatestPost';
import LeftBlogs from './LeftBlogs';
import RightNav from './RightNav';

const Blogs = () => {
    return (
        <div className='flex' >
            <aside className='h-screen mt-20 w-4/5 p-10' >
                <LeftBlogs></LeftBlogs>
            </aside>
            <main className='mx-auto w-28/5 flex flex-col justify-center items-center mt-20 p-10 ' >
                <RightNav></RightNav>
                <LatestPost></LatestPost>
                <GrowYourBuisness></GrowYourBuisness>
            </main>
        </div>
    );
};

export default Blogs;