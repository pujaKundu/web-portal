import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components'

const Home = () => {
  const posts = [
    { title: 'React Testing', excerpt: 'Learn React Testing' },
    { title: 'React With Tailwind', excerpt: 'Learn React with Tailwind' },
  ]
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => 
            <PostCard post={post} key={ post.title}/>
          )}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories/>
</div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-4"></div>
    </div>
  )
}

export default Home
