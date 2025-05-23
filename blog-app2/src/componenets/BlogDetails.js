import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
      
        <NavLink to={`/blog/${post.id}`}>
            <p className='font-bold text-xl hover:underline'>{post.title}</p>
        </NavLink>
        <p className='text-sm mt-1'> 
            By <span className='italic'>{post.author}</span> On  
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span className='font-bold hover:underline'> {post.category}</span>
            </NavLink>
        </p>
        <p className='text-sm '>Posted on {post.date}</p>
        <p className='text-md mt-4'>{post.content}</p>
        <div className='text-sm mt-2 '>
            {post.tags.map( (tag,index) => (
             <NavLink key={index} to={`/tags/${tag.replace(" ","-")}`} >
                <span  className=' hover:underline text-blue-600 font-semibold'> {`#${tag} `} </span>
             </NavLink>
            ))}
        </div>
        
    </div>
  )
}

export default BlogDetails;
