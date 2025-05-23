import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts,loading} = useContext(AppContext);
  console.log("printing inside the blog components");
  console.log(posts);

  return (
    <div className='max-w-[670px] w-11/12 mt-6 flex flex-col gap-y-8'>
      {
        loading ? (< Spinner />) :
        (
          posts.length === 0 ?  
          (<div>
            <p>No posts found</p>
          </div>) :
          ( posts.map((post) => (
              <BlogDetails key={post.id} post={post} />
          )))
        )
      }
    </div>
  )
}

export default Blogs;
