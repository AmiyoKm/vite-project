import {motion} from 'framer-motion'

const Spinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.img src='https://plus.unsplash.com/premium_photo-1730240764655-d52ec777e12b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-32 w-32 rounded-full object-cover' animate={{rotateY : 180 }} transition={{repeat : Infinity , repeatType: 'reverse' , duration : 2}} />
            
        
    </div>
  )
}

export default Spinner