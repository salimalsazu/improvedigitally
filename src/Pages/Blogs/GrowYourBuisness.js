import React from 'react';
import SecondaryButton from '../../Button/SecondaryButton';

const GrowYourBuisness = () => {
    return (
        <div className=" border p-10 mt-5  ">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Grow Your Business</h2>
                <div>
                    <hr className='text-2xl text-[#F87D5E] ' />
                </div>
                <p className='w-44' >We deliver revenue generated results. Grow your business with us, we are a team of professionals with years of experience in proving enormous business growth.</p>
                <div className="card-actions mt-3">
                    <SecondaryButton>Try Our Services</SecondaryButton>
                </div>
            </div>
        </div>
    );
};

export default GrowYourBuisness;