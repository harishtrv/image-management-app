import React from 'react'
import { Link } from 'react-router-dom';

const AddImg = () => {
  return (
    <div>
      <Link to='/add' className="m-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Add Image</Link>
    </div>
  )
}

export default AddImg
