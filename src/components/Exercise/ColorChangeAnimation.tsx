import React from 'react'
import {motion} from 'framer-motion'
const ColorChangeAnimation = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
            <motion.div className='w-32 h-32 ' animate={{x:[-200 , 200 ,-200 , 200 ,-200] , y:[-200, -200 , 200,200 ,-200],backgroundColor:['#ff0000' , '#00ff00' , '#ff0000']}} transition={{repeat:Infinity , duration:2}}></motion.div>
            <motion.div animate={{x : [1000 , 0]}} transition={{duration:1}}>This is a Sliding Text</motion.div>
    </div>
  )
}

export default ColorChangeAnimation