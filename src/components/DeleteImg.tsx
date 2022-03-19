import React from 'react'

interface Props{
  onDeleteClick: () => Promise<void>;
  status: boolean;
}
const DeleteImg: React.FC<Props> = (param: any) => {
  return (
    <div>
      <button onClick={param.onDeleteClick}
        className={`m-2 bg-red-500 py-1 px-1 md:py-2 md:px-4 text-white font-bold rounded ${param.status ? ' hover:bg-red-700' : 'opacity-50 cursor-not-allowed'} `}>
        Delete
      </button>
    </div>
  );
}

export default DeleteImg;
