import React from 'react'
import {motion} from 'framer-motion'
const variants ={
    hidden : { opacity : 0 , scale : 0 , rotate : 0},
    visible : {opacity : 1 , scale : 1 , rotate : 180}
}
const DifferentAnimation = () => {
  return (
    <motion.div transition={{staggerChildren: 0.5}} whileInView= 'visible' initial='hidden' >
        {
            [...Array(3)].map((_,index)=>(
                <motion.div variants={variants} className='w-32 h-32 bg-red-500'></motion.div>
            ))
        }
    </motion.div>
  )
}

export default DifferentAnimation