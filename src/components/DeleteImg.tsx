import React from 'react'

const DeleteImg = (param: any) => {
  return (
    <div>
      <button onClick={param.onDeleteClick}
        className={`m-2 bg-red-500 py-2 px-4 text-white font-bold rounded ${param.status ? ' hover:bg-red-700' : 'opacity-50 cursor-not-allowed'} `}>
        Delete Selected Image
      </button>
    </div>
  );
}

export default DeleteImg;
