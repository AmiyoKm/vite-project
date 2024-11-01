import {motion} from 'framer-motion'
const parentVariants ={
   initial :{opacity : 0},
    animate : {
            
              opacity : 1,   
        transition :{
            staggerChildren : 0.5
        }
    }
}
const childVariant ={
    initial :{opacity : 0 ,x : -500},
    animate :{ opacity : 1, x : 500}
}
const SequentialTransformation = () => {
  return (
    <div className='h-screen flex justify-center items-center'>

        <motion.div variants={parentVariants} initial='initial' animate='animate' >
            {
                [...Array(5)].map((_ , index)=>(
                    <motion.div variants={childVariant} className='w-32 h-32 bg-green-500 text-white'>Square {index+1}</motion.div>
                ))
            }
        </motion.div>

    </div>
  )
}

export default SequentialTransformation