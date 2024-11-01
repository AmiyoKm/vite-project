import {motion} from 'framer-motion'

const VerticalMovement = () => {
  return (
    <div  className='h-screen flex justify-center items-center'>
        <motion.div className='h-32 w-32 bg-green-500 rounded-full' initial={{y: -500}} animate={{y:500}} transition={{type:'spring' , repeat : Infinity ,repeatType:'reverse' , stiffness : 100 }} />
    </div>
  )
}

export default VerticalMovement