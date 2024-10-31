import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
const UseTransform = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const backgroundColor = useTransform(x , [-100,100],['#ff0000', '#00ff00'] )
  return (
    <div className='flex justify-center items-center h-screen'>
        <motion.div className='w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer ' drag style={{x,y , backgroundColor}} dragConstraints={{left: -200, right : 200 , top:-200 , bottom: 200}}>
            <span>Drag me!</span>
        </motion.div>
    </div>
  )
}

export default UseTransform