import React, { useContext } from 'react'
import { MdContext } from '../context/MdContext';

function MarkDownCode() {
    const { handleChange } = useContext(MdContext);
  return (
    <div>
      <textarea
        name="name"
        placeholder="Enter your text here"
        onChange={handleChange}
        className="p-4 bg-gray-800 text-white w-full h-40"
      ></textarea>
    </div>
  );
}

export default MarkDownCode