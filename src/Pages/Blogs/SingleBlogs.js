import React from 'react';

const SingleBlogs = ({ blog }) => {

    const { img, title, description } = blog;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleBlogs;