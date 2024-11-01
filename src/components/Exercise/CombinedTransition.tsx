import {motion } from 'framer-motion'

const CombinedTransition = () => {
  return (
    <div  className='h-screen flex justify-center items-center'>
        <motion.div className='w-32 h-32 bg-green-500 rounded-full' initial={{x:-500 , y: -500}} animate ={{ x:500 , y : 500 , rotateY: 180 , scale: 3}} transition={{repeat: Infinity , repeatType: 'reverse' , duration: 5}}/>
    </div>
  )
}

export default CombinedTransition