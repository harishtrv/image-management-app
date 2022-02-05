import React from 'react'

const DeleteImg = () => {
  let count: number = 0;
  return (
    <div>
      <button className={`m-2 bg-red-500 py-2 px-4 text-white font-bold rounded ${count < 1 ? 'opacity-50 cursor-not-allowed' : ' hover:bg-red-700'} `}>Delete Selected Image</button>
    </div>
  );
}

export default DeleteImg;
