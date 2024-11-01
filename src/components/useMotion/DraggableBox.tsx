import React, { useState } from 'react'
import {motion, useMotionValue, useSpring} from 'framer-motion'
const DraggableBoxMotion = () => {
    const x = useSpring(0)
    const y = useSpring(0)
    const [xValue ,setXValue] = React.useState(0)
    const [yValue ,setYValue] = React.useState(0)
    const handleDrag = () =>{
        setXValue(x.get())
        setYValue(y.get())
    }
    
  return (
    <div>
        <motion.div drag onDrag={handleDrag}  className='w-32 h-32 text-white  bg-slate-600'
        style={{x ,y}} >Position: { xValue } { yValue} </motion.div>
    </div>
  )
}

export default DraggableBoxMotion