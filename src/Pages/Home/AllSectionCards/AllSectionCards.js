import React from 'react';
import seo from "../../../Assets/New folder/Blog-Icon.png"


const AllSectionCards = () => {



    return (
        <div className='flex flex-col justify-center items-center mx-5 lg:mx-20 mt-20'>
            <div>
                <h1 className='text-xl lg:text-4xl font-bold  text-[#30445C] text-center' >Increase organic <span className='text-[#F87D5E] mr-2' >website traffic</span>
                    <br /> and enhance your business web presence</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center mt-10 gap-2 lg:gap-5'>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >SEO Services</h1>
                        <p className='mt-5'>We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >SEM Services</h1>
                        <p className='mt-5'>SEM is Search Engine Marketing you are paying for ads, our expert PPC team increases your leads, increase your revenue, and help your business get traffic faster and rank your page on the top of a search engine.</p>
                    </div>
                </div>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >SMO Services</h1>
                        <p className='mt-5'>Building a social presence is important and necessary but managing, optimising, growing and engaging with audiences is a hectic work our expert social media team are passionate and experienced in optimising and managing.</p>
                    </div>
                </div>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >SMM Services</h1>
                        <p className='mt-5'>Social Media Marketing has become an integral part of the social strategy for business across industries. We provide digitally top-notch quality and targeted social media strategy which impact business growth through social media advertising and help you achieve your goals.</p>
                    </div>
                </div>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >Email Marketing</h1>
                        <p className='mt-5'>Email Marketing is all about communicating, building customer loyalty, expand business reach and connect with different audiences. Our expert Email Marketing team promotes sales, builds relationships, and supports a wide range of marketing initiatives.</p>
                    </div>
                </div>
                <div className='border p-14 hover:shadow-gray-400 hover:shadow-2xl'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold' >Web Development</h1>
                        <p className='mt-5'>Web development services support the creation of all varieties of web-based software and provide a positive online experience. In order to achieve high conversion and adoption rates, Improve Digitally professionally design, develop and provides continuous support for customer-facing and enterprise web apps.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSectionCards;
