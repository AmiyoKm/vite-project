import {motion, useMotionValue, useScroll, useTransform } from 'framer-motion'


const ScrollAnimation = () => {
    const {scrollY} = useScroll()
    const scale = useTransform(scrollY,[0,300] , [1,1.5])
    const opacity = useTransform(scrollY,[0,300] , [1,0])   
  return (
    <div>
        <motion.div className=' h-screen flex items-center justify-center'>
        <motion.div className='bg-blue-400 w-32 h-32 rounded-lg shadow-lg' style={{scale , opacity}} />
    </motion.div>
    <div className="w-full h-[200vh]"></div>
  
    </div>
  )
}

export default ScrollAnimation