import React from 'react'
import { Remarkable } from 'remarkable'
import MarkDownCode from './MarkDownCode'
import MarkDownPrev from './MarkDownPrev'
function Preview({ markDown }) {
    const md = new Remarkable()
  return (
      <div className='flex-1 h-full  flex flex-col'>
          <MarkDownCode />
          <MarkDownPrev />
    </div>
  )
}

export default Preview