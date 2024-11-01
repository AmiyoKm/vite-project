import React from 'react'
import {motion} from 'framer-motion'
const UseDrag = () => {
    
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div drag='x'   className='w-32 h-32 bg-red-500 rounded-lg shadow-lg'>Card</motion.div>
    </div>
  )
}

export default UseDrag