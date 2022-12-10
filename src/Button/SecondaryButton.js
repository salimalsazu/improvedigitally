import React from 'react';

const SecondaryButton = ({ children }) => {
    return (
        <button className="px-8 py-3 shadow-gray-600 shadow-md  rounded-full font-bold text-white bg-[#F87D5E] hover:bg-white hover:text-[#F87D5E]  ">{children}</button>
    );
};

export default SecondaryButton;