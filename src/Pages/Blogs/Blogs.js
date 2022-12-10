import React from 'react';
import useTitle from '../../Hook/useTitle';
import GrowYourBuisness from './GrowYourBuisness';
import LatestPost from './LatestPost';
import LeftBlogs from './LeftBlogs';
import RightNav from './RightNav';

const Blogs = () => {

    //dynamic title
    useTitle('Blog')
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse' >
            <aside className='mx-auto w-full  lg:w-2/5 flex flex-col justify-center items-center mt-[98rem] md:mt-[88rem] lg:mt-20 p-10 ' >
                {/* <LeftBlogs></LeftBlogs> */}
                <RightNav></RightNav>
                <LatestPost></LatestPost>
                <GrowYourBuisness></GrowYourBuisness>
            </aside>
            <main className='h-screen  lg:mt-20 w-full lg:w-4/5 p-10'  >
                {/* <RightNav></RightNav>
                <LatestPost></LatestPost>
                <GrowYourBuisness></GrowYourBuisness> */}
                <LeftBlogs></LeftBlogs>
            </main>
        </div>
    );
};

export default Blogs;