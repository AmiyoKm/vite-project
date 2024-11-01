import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const Modal = () => {
    const [toggle , setToggle] = useState(false)
    const handleClick =() =>{
        setToggle(!toggle)
    }
  return (
    <div className='h-screen flex justify-center items-center w-screen'>
            <button onClick={handleClick}>{toggle ? 'Hide' : 'Show'}</button>
            <AnimatePresence> {
                toggle && <motion.div className='w-40 h-20 bg-slate-800 text-white' initial={{opacity:0 ,scale: 0}} animate={{opacity:1 ,scale : 1}} exit={{opacity:0 , scale:0}} transition={{duration:1}}>
                    THis a Modal
                </motion.div>
            }</AnimatePresence>
           
    </div>
  )
}

export default Modal