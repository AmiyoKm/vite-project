import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
const Sidebar = () => {
    const [toggle , setToggle] = useState(true)
    const handleClick =() =>{
        setToggle(!toggle)
    }
  return (
    <div  className='h-screen flex items-center'>
        <AnimatePresence>
          <motion.div  onClick={handleClick} className='bg-gray-900 h-full w-40 text-white' initial={{x:0}} animate ={{x:toggle ? 0 : -400}} >Sidebar</motion.div> 
        </AnimatePresence>
      
        <button onClick={handleClick} className='bg-red-500'>{toggle ? 'Hide' : 'Show'}</button>
    </div>  
  )
}

export default Sidebar