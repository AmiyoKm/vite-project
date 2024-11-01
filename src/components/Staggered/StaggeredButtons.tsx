import React, { useState } from 'react'
import {motion} from 'framer-motion'
import StaggerChildren from '../motion/StaggerChildren'
const parentVariants = {
    hidden :  { opacity : 0 , y : 100 },
    visible :{
         opacity : 1 , y : 0,
       transition: { staggerChildren : 1 }
    }
}

const childVariants = {
    hidden :  { opacity : 0 , y : 100 },
    visible : { opacity : 1 , y : 0}
}
const StaggeredButtons = () => {

    
  return (
    <motion.div whileHover='visible' className='flex' initial='hidden'   >
        {
            [...Array(10)].map((_,index)=>(
                <motion.button variants={childVariants} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' key={index} whileHover={{scale: 1.2}}>Button {index+1}</motion.button>
            ))
        }
    </motion.div>
  )
}

export default StaggeredButtons