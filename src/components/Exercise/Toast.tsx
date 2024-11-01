import React, { useState } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
const Toast = () => {
    const [toggle , setToggle] = useState(false)
    const handleClick =() =>{
        setToggle(true)
        setTimeout(()=>{
            setToggle(false)
        },3000)
    }
  return (
    <div>
        <button onClick={handleClick}>{toggle ? 'Hide' : 'Show'}</button>
        <AnimatePresence>
       { toggle && <motion.div  initial={{opacity : 0 , y : -200}} animate={{opacity : 1 , y: 0}} exit={{opacity : 0 , y : -200}} transition={{duration: 1}} className='bg-blue-400 w-40 h-10  rounded-lg shadow-lg fixed bottom-5 right-5' >
            A Button was clicked
        </motion.div>} 
        </AnimatePresence>
        
    </div>
  )
}

export default Toast