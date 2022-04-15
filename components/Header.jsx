import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Header = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
  return (
      <div className='container mx-auto px-10 mb-8'>
          <div className='border-b w-full inline-block border-blue-400 py-8'>
              <div className=' block'>
                  <Link href='/'>
                      <span className='cursor-pointer font-bold text-4xl text-blue-900'>Web Portal</span>
                  </Link>
                  <div className='hidden md:float-left md:contents'>
                      {
                          categories.map(category => (
                              <Link key={category.slug} href={`/category/${category.slug}`}>
                                  <span className='md:float-right mt-2 align-middle text-cyan-600 hover:text-cyan-900 ml-4 font-semibold cursor-pointer'>
                                      {category.name}
                                  </span>
                              </Link>
                          ))
                    }
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Header