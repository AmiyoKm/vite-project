import React from 'react'
import { motion } from 'framer-motion'
const LongTap = () => {
    const [tapped , setTapped] = React.useState(false)
    const handleTapStart =() =>{
        setTapped(true)
    }
    const handleTapEnd =() =>{
        setTapped(false)
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div onTapStart={handleTapStart} onTapCancel={handleTapEnd} onTap={handleTapEnd} animate={{scale : tapped ? 2 : 1}} className='w-32 h-32 bg-red-500 rounded-lg shadow-lg'></motion.div>
    </div>
  )
}

export default LongTap