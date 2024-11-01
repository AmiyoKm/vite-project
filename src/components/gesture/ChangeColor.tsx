import React from 'react'
import {motion} from 'framer-motion'
const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"];
const ChangeColor = () => {
    const [color , setColor] = React.useState(0)
    const handleTap =() =>{
        setColor(color === 3 ? 0 : color+ 1)
        //setColor((prev) => (prev + 1) % colors.length);
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div onTap={handleTap} className={`w-32 h-32 rounded-lg ${colors[color]} shadow-lg`} ></motion.div>
    </div>
  )
}

export default ChangeColor