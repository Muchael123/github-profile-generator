import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview';
import { MdProvider } from './context/MdContext';


function App() {

  return (
    <MdProvider>
      <div className="min-h-screen w-screen bg-[#00072d] text-white justify-center flex">
        <div className="flex flex-col md:flex-row justify-between overflow-clip py-20 gap-20">
          <Editor  />
          <Preview />
        </div>
      </div>
    </MdProvider>
  );
}

export default App
