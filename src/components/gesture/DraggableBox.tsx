import React from 'react'
import {motion} from 'framer-motion'
const DraggableBox = () => {
    const [rotate , setRotate] = React.useState(0)
    const handleDrag =(_ : any , info: any) =>{
        const newRotate = rotate +info.offset.x
        setRotate(newRotate)
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div drag style={{rotate : rotate}} onDrag={handleDrag} className='w-32 h-32 bg-red-500 rounded-lg shadow-lg'>{rotate}</motion.div>
    </div>
  )
}

export default DraggableBox