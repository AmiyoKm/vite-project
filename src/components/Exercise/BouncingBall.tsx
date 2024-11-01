import React from 'react'
import { motion } from 'framer-motion'
import { ImInfinite } from 'react-icons/im'
const BouncingBall = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div className='w-32 h-32 bg-green-600 rounded-full' animate={{y:[-100 , 100 , -100 ]}} transition={{repeat: Infinity}}  />
        <motion.div className=' w-32 h-32 bg-green-600 rounded-full mt-10' animate={{scale: [1.2 , 1,1.2]}} transition={{duration: 1 , repeat:Infinity}} ></motion.div>
    </div>
  )
}

export default BouncingBall