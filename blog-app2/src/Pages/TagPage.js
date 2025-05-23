import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../componenets/Header';
import Blogs from '../componenets/Blogs';
import Pagination from '../componenets/Pagination';

const TagPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <div className='flex gap-3 mt-3 w-[670px] items-center'>
        <button onClick={() => navigate(-1)} className="border-2 border-gray-300 py-1 px-4 rounded-md mt-2">
            Back
        </button>
        <h2  className='font-bold text-xl'> Blogs on <span className='text-blue-600'> #{tag}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage;
