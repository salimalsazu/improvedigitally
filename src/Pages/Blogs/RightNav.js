import React from 'react';
import PrimaryButton from '../../Button/PrimaryButton';

const RightNav = () => {
    return (
        <div>
            <div className=" border p-5 ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Learn and Grow!</h2>
                    <div>
                        <hr className='text-2xl text-[#F87D5E] ' />
                    </div>
                    <input placeholder='your@email.com*' className="flex items-center h-12 text-black px-4 mt-2 focus:outline-none focus:ring-2 border rounded-full" />
                    <div className="card-actions mt-3">
                        <PrimaryButton>Subscribe</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;