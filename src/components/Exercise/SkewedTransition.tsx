import {motion} from 'framer-motion'
import { useState } from 'react'

const SkewedTransition = () => {
    const [on , setOn] = useState(false)
    const handleClick =() =>{
        setOn(!on)
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div onClick={handleClick} className='h-32 w-32 bg-green-500' animate={{skew : on ? 20 : 0}} />
    </div>
  )
}

export default SkewedTransition