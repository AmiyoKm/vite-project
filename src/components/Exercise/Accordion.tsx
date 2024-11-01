import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
const list = [
    {
        title : 'title 1' ,
        content: 'Content of 1 '
    },{
        title : 'title 1' ,
        content: 'Content of 1 '
    },{
        title : 'title 2' ,
        content: 'Content of 2 '
    },{
        title : 'title 3' ,
        content: 'Content of 3 '
    },{
        title : 'title 4' ,
        content: 'Content of 4 '
    },{
        title : 'title 5' ,
        content: 'Content of 5 '
    },
]
const Accordion = () => {
    const [indexOf , setIndexOf] = useState(null)
    const handleClick =(index : any) =>{
        setIndexOf(indexOf ===index ? null : index)
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <AnimatePresence>
            <div className='flex flex-col'>
            { list.map((item,index)=>(
                  <div className='bg-slate-400 w-36'>
                 <div>  <button className='text-center' onClick={()=>handleClick(index)}>{item.title}</button></div>
                 <motion.div className='overflow-hidden' initial={{height:0}} animate={{height : indexOf===index ? 'auto' :0}}>{item.content}</motion.div>
              </div>
            ))}
            </div>
           
        </AnimatePresence>
      
    </div>
  )
}

export default Accordion