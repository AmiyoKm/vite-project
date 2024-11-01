import {motion} from 'framer-motion'

const CardFlip = () => {
  return (
    <motion.div initial={{rotateY: 0}} whileInView={{rotateY: 360}} transition={{duration: 2 , type: 'spring'}} className='w-32 h-32 shadow-lg'>
        <p className='m-4 text-3xl'>Card</p>
    </motion.div>
  )
}

export default CardFlip