import React from 'react';

const SinglePost = ({ blog }) => {
    const { img, title, posttime } = blog;

    return (
        <div className="flex">
            <div className='mr-2'>
                <figure><img className='w-52 rounded-lg' src={img} alt="Movie" /></figure>
            </div>
            <div >
                <p className='w-40' >{title}</p>
                <p className='text-[#f87d5e]' >{posttime}</p>

            </div>
        </div>
    );
};

export default SinglePost;