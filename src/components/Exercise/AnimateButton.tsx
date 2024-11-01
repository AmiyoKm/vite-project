import React from 'react'
import {motion } from 'framer-motion'
 const AnimateButton = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.button className='p-6 bg-green-600 rounded-lg ' whileTap={{scale: 0.9}} whileHover={{backgroundColor: 'green'}}>Animations</motion.button>
    </div>
  )
}

export default AnimateButton