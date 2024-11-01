import {motion, useScroll, useTransform } from 'framer-motion'
import { div } from 'framer-motion/client'
const ScrollAnimation2 = () => {
    const {scrollY} =useScroll()
    const scale = useTransform(scrollY,[0,300] , [1,0.5])
    const borderRadius = useTransform(scrollY,[0,300] , ['0%','50%'])
  return (
    <div className='h-[3000px]'>
           <div className='relative h-screen overflow-hidden'>
        <motion.img className='absolute inset-0 object-cover w-full h-full r' style={{scale, borderRadius}} src='https://plus.unsplash.com/premium_photo-1730240724921-8de763b6d0d1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='BackGround'/>
        <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl">Scroll to Animate</h1>
        </div>
    </div>
    </div>
 
  )
}

export default ScrollAnimation2