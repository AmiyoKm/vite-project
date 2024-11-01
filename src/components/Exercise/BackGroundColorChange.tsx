import {motion} from 'framer-motion'

const BackGroundColorChange = () => {
  return (
    <motion.div className='h-screen w-screen' animate ={{backgroundColor:['#ff0000' , '#00ff00' , '#ff0000']}} transition={{repeat: Infinity , duration:2}}>

    </motion.div>
  )
}

export default BackGroundColorChange