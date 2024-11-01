import React from 'react'
import {motion, useMotionValue, useSpring} from'framer-motion'
const DynamicRotation = () => {
    const rotate = useSpring(0)
    const [rotateValue , setRotateValue] = React.useState(0)
    const handleRotate =() =>{
        rotate.set(Math.floor(rotate.get()+45))
        setRotateValue(rotate.get())
    }
  return (
    <div>
        <motion.div style={{rotate}} onClick={handleRotate}className='w-32 h-32 bg-red-500 rounded-lg shadow-lg'>{}{rotateValue}</motion.div>
    </div>
  )
}

export default DynamicRotation