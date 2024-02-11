import React from 'react';
import TestImage from '../../assets/TestImage.jpg'
import {Link}from 'react-router-dom'
const Blog = () => {
  return (
    <div className='bg-gray-300 p-10 flex flex-col justify-center items-center'>
      <h1 className='md:text-3xl text-xl font-bold text-center mb-6'>Blogs</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 my-10'>
        <div className='w-60 h-fit bg-white rounded-lg shadow-lg'>
          <img className='w-60 h-40 rounded-lg' src={TestImage} alt='TestImage' />
          <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <Link to="/blog/923498658358" className='px-2 text-blue-800 hover:cursor-pointer hover:underline'>Learn more...</Link>
        </div>
        <div className='w-60 h-40 bg-white rounded-lg shadow-lg'>A</div>
        <div className='w-60 h-40 bg-white rounded-lg shadow-lg'>A</div>
        <div className='w-60 h-40 bg-white rounded-lg shadow-lg'>A</div>
      </div>
    </div>
  );
};

export default Blog;
