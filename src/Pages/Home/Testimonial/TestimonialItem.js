import React from 'react';

const TestimonialItem = ({ slide }) => {

    const { image, name, details, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-96">
            <div >
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-20 rounded-xl" />
                    <p className='mt-5' >{details}</p>
                    <h1 className='text-3xl text-[#30445C] font-bold mt-5' >{name}</h1>
                </div>

            </div>

            <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default TestimonialItem;