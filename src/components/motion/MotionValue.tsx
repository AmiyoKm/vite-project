import React from 'react'
import { motion , useMotionValue, useMotionValueEvent } from 'framer-motion'
const MotionValue = () => {
    const x = useMotionValue(100);
    useMotionValueEvent(x, 'animationStart',()=>{
        console.log('animationStart on x');
    })
    useMotionValueEvent(x, 'change',(latest)=>{
        console.log('change on x ',latest);
    })
  return (
    <div>
        <motion.div className='w-[200px] h-[200px] bg-red-500' drag style={{x}} />
    </div>
  )
}

export default MotionValue