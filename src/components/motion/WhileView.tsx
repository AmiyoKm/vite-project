
import {motion } from 'framer-motion'
const WhileView = () => {
  return (
    <div className='bg-gray-700 flex justify-center items-start mt-[30rem]'>
        <div className='h-[200vh] w-full flex justify-center items-center'>
            <motion.div initial={{scale:0.5, opacity : 0}} 
            whileInView={{scale:1.2 , opacity: 1, y: -200 ,backgroundColor: 'orange'}} className='bg-white rounded-lg shadow-lg text-center '>
                <h2 className='text-2xl font-bold mb-2 text-white'>Card</h2>
                <p className="text-white">
                    This card animated beautifully into view!
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default WhileView