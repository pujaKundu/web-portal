import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
    .then(newCategories => setCategories(newCategories))
  }, [])
  
  return (
    <div className="mb-8 rounded-lg bg-cyan-600 p-8 pb-12 text-white shadow-lg transition duration-700 hover:bg-cyan-700">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold ">Categories</h3>{' '}
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3 hover:font-bold">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories