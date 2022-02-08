import React from 'react'

const SelectAll = (params: any) => {
  return (
    <div>
      <button className="m-2 py-2 px-4  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={params.selectAll}>Select All</button>
    </div>
  );
}

export default SelectAll
