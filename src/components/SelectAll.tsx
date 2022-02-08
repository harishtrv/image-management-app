import React from 'react'

const SelectAll = (params: any) => {
  return (
    <div>
      <button className="ml-2 px-1 py-1 md:py-2 md:px-4  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={params.selectAll}>SelectAll</button>
    </div>
  );
}

export default SelectAll
