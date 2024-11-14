import React from 'react'

function Editor({ handleChanges }) {

  return (
    <div className="flex-1">
      <form>
        <label htmlFor="name" className="text-sm text-green-500 my-4">
          Enter your Name:
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          className="outline-none bg-transparent border border-blue-500 rounded-[8px] p-2 text-green-400 font-semibold"
        />
      </form>
    </div>
  );
}

export default Editor