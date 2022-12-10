import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../Lottie/laptop.json'
import PrimaryButton from '../../Button/PrimaryButton';


const Hero = () => {
    return (
        <div className='flex justify-center items-center mx-10 gap-20' >
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[#F87D5E] font-bold mb-5'>Grow Digitally</h1>
                <p className='text-6xl text-[#30445C] font-bold' >Boosts your <br /> <span className='text-[#F87D5E]' >website traffic!</span></p>
                <div className='flex gap-5 mt-16'>
                    <div className="col-span-full sm:col-span-3 ">
                        <input id="firstname" type="text" placeholder="Mail Address*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <input id="lastname" type="text" placeholder="yoursite.com*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                    </div>
                </div>
                <div className='mt-10' >
                    <PrimaryButton>Chcek Now</PrimaryButton>
                </div>
            </div>
            <div >
                <Lottie animationData={reader} loop={true} />
            </div>

        </div >
    );
};

export default Hero;
