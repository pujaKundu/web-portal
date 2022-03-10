import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  console.log(post); console.log(post.title)
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden  shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full  rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg "
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl  font-semibold text-black transition duration-700 hover:text-pink-600 ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
            alt={post.author.name}
          />
          <p className="ml-2 inline align-middle text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>Continue reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard;