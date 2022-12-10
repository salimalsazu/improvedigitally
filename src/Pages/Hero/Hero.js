import React from 'react';



const Hero = () => {
    return (
        <div className='flex justify-center items-center' >

            <div>
                <h1 className='text-[#F87D5E]'>Grow Digitally</h1>
                <p className='text-6xl text-[#30445C] ' >Boosts your <span className='text-[#F87D5E]' >website traffic!</span></p>
                <div className='flex gap-5'>
                    <div className="col-span-full sm:col-span-3 ">
                        <input id="firstname" type="text" placeholder="Your Name*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <input id="lastname" type="text" placeholder="Your@email.com*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                    </div>
                </div>
            </div>
            <div>


            </div>

        </div>
    );
};

export default Hero;
