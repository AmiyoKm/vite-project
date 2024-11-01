import {motion } from 'framer-motion'

const BasicTransition = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div className='h-32 w-32 bg-green-500 rounded-full' initial={{x: -200}} animate={{x : 200}} transition={{delay : 2, duration : 1, type: 'spring' , stiffness:300}} />
    </div>
  )
}

export default BasicTransition