import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const SingleHomeBlog = ({ blog }) => {
    const { posttime, img, title } = blog;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">

            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body p-10">
                <p>{posttime}</p>
                <h2 className="card-title">{title}</h2>
                <AiOutlinePlusCircle className='text-3xl mt-5 text-[#F87D5E]  hover:rotate-90' ></AiOutlinePlusCircle>
            </div>
        </div>
    );
};

export default SingleHomeBlog;