import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import PrimaryButton from '../../Button/PrimaryButton';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {

    const [value, setValue] = useState()

    return (
        <div>
            <div className='bg-gray-600 text-white h-52'>
                <p className='p-20 text-2xl' >Contact</p>
            </div>
            <div className='flex mt-20 gap-10 justify-center items-start' >
                <div className='flex flex-col' >
                    <div className='flex flex-col justify-center items-center' >
                        <h1 className='text-[#30445C] text-3xl  text-center font-semibold' >We can't wait to <span className='text-[#F87D5E]' >hear from <br /> you!</span></h1>
                        <p className='w-96 text-center mt-10' >At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>
                    </div>
                    <div className='lg:ml-10 flex flex-col gap-2 ' >
                        <p className='mt-8 text-2xl font-semibold  mb-5'>Contact</p>
                        <p className='flex justify-center items-center ' > <span><ImLocation className='text-xl text-[#F87D5E] mr-2' ></ImLocation></span> Jamia Nagar, Okhla, New Delhi, Delhi 110025</p>
                        <p className='flex items-center' > <span className='text-xl text-[#F87D5E] mr-2' ><BsFillTelephoneFill></BsFillTelephoneFill></span> +91 98712 32887</p>
                        <p className='flex items-center ' > <span className='text-xl text-[#F87D5E] mr-2'  ><AiOutlineMail></AiOutlineMail></span> info@improvedigitally.com</p>
                    </div>
                </div>

                <div className='-mt-40 bg-white rounded-2xl' >
                    <form novalidate="" action="" className="container justify-center items-center flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid shadow-gray-500 shadow-lg rounded-2xl p-10">
                        <h1 className='text-3xl text-[#30445C] font-semibold' >Get in <span className='text-[#F87D5E]' >Touch</span></h1>
                        <fieldset className="grid grid-cols-4 mx-auto gap-6 p-6 rounded-md shadow-sm">

                            <div className=" grid grid-cols-6 gap-10 justify-center items-center lg:col-span-5">
                                <div className="col-span-full sm:col-span-3 ">
                                    <input id="firstname" type="text" placeholder="Your Name*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <input id="lastname" type="text" placeholder="Your@email.com*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <PhoneInput className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1"
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={setValue} />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <input id="lastname" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" />
                                </div>

                                <div className="col-span-full" >
                                    <input id="address" type="text" placeholder="Subject*" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                                </div>
                                <div className="col-span-full">
                                    <textarea type="text" name="" id="" placeholder='Write your query*' className="w-full rounded-md focus:ring focus:ring-opacity-75 border-b-2 py-1" required />
                                </div>
                            </div>

                        </fieldset>
                        <div>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;