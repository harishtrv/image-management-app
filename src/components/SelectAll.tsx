import React from 'react'

interface Props {
  selectAll: () => void;
}
const SelectAll: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <button className="ml-2 px-1 py-1 md:py-2 md:px-4  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={props.selectAll}>SelectAll</button>
    </div>
  );
}

export default SelectAll;
