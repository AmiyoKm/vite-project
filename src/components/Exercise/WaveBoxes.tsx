import React from 'react'
import {motion} from 'framer-motion'
import { div } from 'framer-motion/client'

const WaveBoxes = () => {
    const parentVariant ={
        initial : { x: -500 , y: 100 , opacity : 0},
        animate: { x: 0, y: 0  , opacity : 1},
        transition :{
            staggerChildren : 0.8

            
        }

    }
    const childVariant ={
        initial : { x: -500} ,
        animate : {x:[-500 , -400 ,-300,-200 , -100 , 0 ,100 ,200 ,300 ,400,500 ] ,y: [100,-100,100,-100,100,-100,100,-100,100,-100,100]}
    }
  return (
    <div className='h-screen flex justify-center items-center'>
         <motion.div  variants={parentVariant} initial='initial' animate='animate'>
           <div className='flex'>{
             [...Array(5)].map((_,index)=>(
                <motion.div className='bg-green-600 w-10 h-10' variants={childVariant} transition={{delay: 0.5*index , duration : 1}}></motion.div>
            ))
            }
           
        </div>
           
        
    </motion.div>
    </div>
   
  )
}

export default WaveBoxes