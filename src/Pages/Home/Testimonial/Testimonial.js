import React from 'react';
import testimonial from '../../../Assets/Testimonial.png'
import sign from '../../../Assets/sign.PNG'
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {


    const bannerData = [
        {
            image: sign,
            details: "Their team accomplished their goals exactly on time, and I highly recommend them.",
            name: "Rhett Lewis",
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: sign,
            details: "I was amazed at how quickly they understood our industry and lay out a specific plan for the real estate industry",
            name: "Amita",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: sign,
            details: "Their team accomplished their goals exactly on time, and I highly recommend them.",
            name: "Rhett Lewis",
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: sign,
            details: "Improve Digitally provides reliable digital marketing services. We are happy to work with them and look forward to taking our online presence to the next level.",
            name: "Allen",
            prev: 3,
            id: 4,
            next: 5
        }
    ]



    return (
        <div className='flex flex-col justify-center items-center mt-20' >
            <p className='text-[#F87D5E] font-extrabold mb-8' >Client’s love</p>
            <h1 className='text-3xl lg:text-5xl font-extrabold text-[#30445C]' >Love from  <span className='text-[#F87D5E] '>Clients</span></h1>

            <div className='flex justify-center items-center mx-20 gap-10'>
                <div>
                    <img className='w-80 rounded-full' src={testimonial} alt="" />
                </div>
                <div>
                    <div className="carousel w-80 ml-5 lg:ml-0 lg:w-96 py-10">
                        {
                            bannerData.map(slide => <TestimonialItem
                                key={slide.id}
                                slide={slide}
                            ></TestimonialItem>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;