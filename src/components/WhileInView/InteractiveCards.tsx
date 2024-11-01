import React from 'react'
import {motion} from 'framer-motion'
const variants = {
    hidden : { opacity : 0 },
    visible : {opacity : 1}
}
const InteractiveCards = () => {
  return (
    <motion.div whileInView='visible' initial='hidden' transition={{staggerChildren : 0.2}} className='grid  grid-cols-3 gap-4'>
        {
            [...Array(12)].map((_,index)=>(
                <motion.div variants={variants} key={index} whileHover={{scale: 1.1 , backgroundColor : 'greenyellow'}} className='w-32 h-32 bg-red-500'></motion.div>
            ))
        }
      
    </motion.div>
  )
}

export default InteractiveCards