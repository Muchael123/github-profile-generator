import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview';


function App() {
  const [Details, setDetails] = useState({})
  const [GeneratedMd, setGeneratedMd] = useState('')
  const handleChange = (e) => {
    setDetails((prev) => 
      ({ ...prev, [e.target.name]: e.target.value })
    )
    setGeneratedMd(`# ${Details.name}`)
  }
  return (
    <div className="min-h-screen w-screen bg-[#00072d] text-white justify-center flex">
      <div className="flex flex-col md:flex-row justify-between overflow-clip py-20 gap-20">
        <Editor handleChanges={handleChange} />
        <Preview markDown={GeneratedMd} />
      </div>
    </div>
  );
}

export default App
