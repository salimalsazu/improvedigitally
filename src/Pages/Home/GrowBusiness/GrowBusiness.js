import React from 'react';
import PrimaryButton from '../../../Button/PrimaryButton';
import Lottie from 'lottie-react';
import reader from '../../../Lottie/laptop.json'

const GrowBusiness = () => {
    return (
        <div className='flex justify-center flex-row-reverse items-center mx-10 gap-20' >
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[#F87D5E] font-bold mb-5'>Our Business Commitment</h1>
                <p className='text-6xl text-[#30445C] font-bold' >Grow your <br /> <span className='text-[#F87D5E]' >business </span> digitally  </p>
                <div className='flex flex-col gap-1 mt-16'>
                    <div className='flex gap-8' >
                        <div>
                            <p className='text-5xl font-bold text-[#07cab2]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#07cab2]' >10x</p>
                            <p className='w-40' >Increase in Website Organic Traffic</p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#F87D5E]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#F87D5E]'>5x</p>
                            <p className='w-40' >Increase in Quality Conversions</p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#6a4af4]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#6a4af4]'>45%</p>
                            <p className='w-40' >Growth on Social Media</p>
                        </div>
                    </div>
                    <div className='flex gap-8' >
                        <div>
                            <p className='text-5xl font-bold text-[#07cab2]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#07cab2]' >33%</p>
                            <p className='w-40' >Quality Conversions Through Social Media</p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#F87D5E]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#F87D5E]'>18x</p>
                            <p className='w-40' >Increase in Conversions Through Email</p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#6a4af4]'  >.</p>
                            <p className='text-4xl mb-2 font-bold text-[#6a4af4]'>50%</p>
                            <p className='w-40' >Higher Conversion for Local Business</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10' >
                    <PrimaryButton>Get Free Consultation</PrimaryButton>
                </div>
            </div>
            <div>
                <Lottie animationData={reader} loop={true} />
            </div>

        </div>
    );
};

export default GrowBusiness;