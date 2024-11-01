import React from 'react'
import { motion } from "framer-motion";


const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop",
];
const parentVariants= {
  
  visible : {
   
    transition : {staggerChildren : 0.8}
  }
 }
 const childrenStagger = { 
   hidden :  { opacity : 0 , y : 100 },
   visible : { opacity : 1 , y : 0}
 }
const StaggeredImages = () => {
  return (
    <motion.div  variants={parentVariants} initial='hidden' animate='visible'>
        {
            images.map((image , index) => (
                <motion.img className='w-1/3 h-1/3 object-cover' src={image} key={index} variants={childrenStagger} />
            ))
        }
    </motion.div>
  )
}

export default StaggeredImages