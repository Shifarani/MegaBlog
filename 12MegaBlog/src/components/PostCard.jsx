import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredimage }) {

       console.log("Image ID:", featuredimage);
      console.log("Preview URL:", appwriteService.getFilePreview(featuredimage));


  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-white border border-pink-100 rounded-xl p-4 hover:shadow-md hover:border-pink-300 transition duration-200'>

        <div className='w-full flex justify-center mb-4'>
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className='rounded-xl w-full h-48 object-cover'
          />
        </div>

        <h2 className='text-lg font-semibold text-gray-800 hover:text-pink-500 transition'>
          {title}
        </h2>

      </div>
    </Link>
  )
}

export default PostCard