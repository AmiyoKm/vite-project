import { motion } from 'framer-motion'

const WhileHover = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <motion.div  className='w-[200px] h-[200px]  bg-red-500 ' drag dragConstraints={{top:50 , left : -50 , right : 50 , bottom : -50}} whileTap={{scale : 2 ,backgroundColor : 'yellow'}} transition={{type : 'spring' ,stiffness : 300}} />
       
    </div>
  )
}

export default WhileHover