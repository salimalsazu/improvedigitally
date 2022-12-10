import React from 'react';
import PrimaryButton from '../../../Button/PrimaryButton';
import Lottie from 'lottie-react';
import reader from '../../../Lottie/seo1.json'
import { AiFillPlayCircle } from 'react-icons/ai';


const OrganicSearch = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center mx-5 lg:mx-10 gap-20 mt-20' >
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[#F87D5E] font-bold mb-5'>
                    Organic Search Growth</h1>
                <p className='text-3xl lg:text-6xl text-[#30445C]  font-bold' >Enhance your <br /> <span className='text-[#F87D5E]' >Organic Search</span>  Visibility! <br /> </p>
                <div className='flex gap-5 mt-16'>

                </div>
                <div className='mt-3 lg:mt-10 flex items-center' >
                    <PrimaryButton>Get Started</PrimaryButton>
                    <AiFillPlayCircle className='text-5xl ml-5 text-[#F87D5E] hover:text-[#30445C]' ></AiFillPlayCircle>
                </div>
            </div>
            <div>
                <Lottie animationData={reader} loop={true} />
            </div>

        </div>
    );
};

export default OrganicSearch;