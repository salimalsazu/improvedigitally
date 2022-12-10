import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="px-8 py-3 shadow-gray-600 shadow-md bg-[#30445C] rounded-full font-bold text-white hover:bg-[#F87D5E]  ">{children}</button>
    );
};

export default PrimaryButton;