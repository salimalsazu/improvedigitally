import React, { useEffect, useState } from 'react';
import SingleHomeBlog from './SingleHomeBlog';




const OurBlogs = () => {

    const [homeBlogs, setHomeBlogs] = useState([]);

    useEffect(() => {
        const url = 'https://server-tau-gules.vercel.app/limitblogs'
        fetch(url)
            .then(res => res.json())
            .then(data => setHomeBlogs(data))
    }, [])

    console.log(homeBlogs)


    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <p className='text-[#F87D5E] font-extrabold mb-8' >News & Blog</p>
            <h1 className='text-2xl lg:text-5xl font-extrabold text-[#30445C]' >Our latest <span className='text-[#F87D5E] '>media</span></h1>
            <div className='flex justify-center items-center mt-10 ' >
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 mx-5 lg:mx-20' >
                    {
                        homeBlogs.map(hb => <SingleHomeBlog blog={hb} key={hb._id} ></SingleHomeBlog>)
                    }

                </div>
            </div>
        </div >
    );
};

export default OurBlogs;