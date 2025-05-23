import React from 'react'
import Header from '../componenets/Header'
import Blogs from '../componenets/Blogs'
import Pagination from '../componenets/Pagination'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
