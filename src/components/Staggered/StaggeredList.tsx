import {motion } from 'framer-motion'
 import React from 'react'
    const parentVariable ={
        hidden :  { opacity : 0 , y : 100 },
        
        visible :{
             opacity : 1 , y : 0,
           transition: { staggerChildren : 0.8 }
        }
    }
    const childVariable ={ 
        hidden :  { opacity : 0 , y : 100 },
        visible : { opacity : 1 , y : 0}
    }
const StaggeredList = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <motion.ul variants={parentVariable} initial='hidden' animate='visible'>
        {
            items.map((item , index) =>(
                <motion.li variants={childVariable} key={index}>{item}</motion.li>
            ))
        }
        
    </motion.ul>
  )
}

export default StaggeredList