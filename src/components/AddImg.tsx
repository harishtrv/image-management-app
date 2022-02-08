import React from 'react'
import { Link } from 'react-router-dom';

const AddImg = () => {
  return (
    <div>
      <Link to='/add' className="m-1 sm:m-2 py-1 px-1 md:py-2 md:px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Add</Link>
    </div>
  )
}

export default AddImg
