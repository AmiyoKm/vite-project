import  { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
const FadeComponent = () => {
    const [show , setShow] = useState(true)
    const handleClick = () =>{
        setShow(!show)
    }
  return (
    <div className='h-screen flex justify-center items-center'>
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button> 
      <AnimatePresence>
      {
        show &&  <motion.div className='w-44 h-44 bg-green-600' initial={{scale: 0 , opacity: 0}} animate={{scale: 1 , opacity : 1 }} transition={{ duration: 1}} exit={{scale:0 ,opacity: 0}}/>
      }

        </AnimatePresence>     
      
    </div>
  )
}

export default FadeComponent