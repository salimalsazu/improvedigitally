import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddBlogs = () => {

    const imageHostKey = "f04df4e1343869002a97bc435ec536f7";
    console.log(imageHostKey)
    const { register, handleSubmit } = useForm();
    const posttime = new Date().toLocaleString();
    const navigate = useNavigate();

    const handleAddBlog = (data) => {
        console.log(data);

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);


                    const postBlogs = {
                        title: data.title,
                        description: data.description,
                        img: imgData.data.url,
                        posttime

                    }
                    //save information to the database 

                    fetch('http://localhost:5000/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(postBlogs)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            navigate('/blogs')
                        })
                }


            })

    }


    return (

        <div className="flex items-center justify-center text-center h-screen mt-10">
            <form onSubmit={handleSubmit(handleAddBlog)} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  bg-gray-500 text-white">
                <h1 className='text-3xl font-extrabold' >Post Your Blog</h1>
                <label for="username" className="self-start text-xs font-semibold"> Title</label>
                <input {...register('title')} className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" required />
                <label for="password" className="self-start mt-3 text-xsfont-semibold">Description</label>
                <input {...register('description')} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" required />

                <label className="label"> <span className="self-start mt-3 text-xs font-semibold">Blog Image</span></label>
                <input type="file" {...register("img", {
                    required: 'Photo is required'
                })} className="input input-bordered w-full max-w-xs text-black" />

                <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Post</button>

            </form>
        </div>
    );
};

export default AddBlogs;