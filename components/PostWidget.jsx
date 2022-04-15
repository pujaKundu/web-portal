import React,{useState,useEffect} from 'react' 
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts,getSimiliarPosts } from '../services'

const PostWidget = ({categories,slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimiliarPosts(categories, slug)
      .then(result => setRelatedPosts(result))
    }
    else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts);
  
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold ">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="mb-4 flex w-full items-center rounded p-2 transition duration-700 hover:bg-slate-100"
        >
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              className="rounded align-middle"
              src={post.featuredImage.url}
              alt={post.title}
            />
          </div>
          <div className="ml-4 flex-row ">
            <p className="font-xs text-gray-500 ">
              {moment(post.createdAt).format('MMM DD YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget