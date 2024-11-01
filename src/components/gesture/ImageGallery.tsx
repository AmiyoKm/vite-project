import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
const images = [
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
const ImageGallery = () => {
    const [currentImage , setCurrentImage] = useState(0)
    const handleDragEnd  = (event : any , info : any) => {
        if(info.offset.y > 100){
            setCurrentImage( count => count === 0 ? 2 : count-1 )
        }
        else if(info.offset.y < -100){
            setCurrentImage(count => count === 2 ? 0 : count +1)
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
         <div className="relative w-72 h-72 overflow-hidden">
         <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full rounded"
        />
      </AnimatePresence>
         </div>
        
    </div>
  )
}

export default ImageGallery