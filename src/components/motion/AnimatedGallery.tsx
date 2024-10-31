import { stagger } from 'framer-motion';
import { img } from 'framer-motion/client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
const galleryImages = [
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const parentVariants={
    hidden :{opacity : 0} ,
    visible :{
        opacity : 1,
        transition : {
            staggerChildren : 1.2
        }
    }
  }
  const childVariants ={
    hidden : {opacity : 0},
    visible : {opacity : 1}
  }
const AnimatedGallery = () => {

    const [showImage , setShowImage ] = useState(false)
    function handleClick() {
        setShowImage(!showImage)
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={handleClick}>
            {showImage ? 'Hide Images ' : 'Show Images'}
        </button>
        <motion.div className="flex"  variants={parentVariants} initial='hidden'
    animate={showImage ? 'visible' : 'hidden'}>
            {galleryImages.map((image , index)=>(
                <motion.img variants={childVariants} className='ml-[2rem] w-[300px] h-[200px] object-cover' src={image}  alt={`Image ${index+1}`} />
            ))}
        </motion.div>
    </div>
  )
}

export default AnimatedGallery