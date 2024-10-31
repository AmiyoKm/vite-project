import { motion } from "framer-motion";

const StaggerChildren = () => {
  const parentVariants = {
    hidden :{opacity : 0} ,
    visible :{
        opacity : 1,
        transition: {
            staggerChildren: 0.8,
          },
    },
    exit :{
        opacity : 0,
        transition: {
            staggerChildren: 0.8,
          },
    }
   
  };
  const childVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div variants={parentVariants} initial='hidden' animate='visible' exit='exit'>
      {[...Array(5)].map((_, index) => (
        <motion.div key={index} className="h-14 w-14 rounded-full bg-green-500 mb-4" variants={childVariants} />
      ))}
    </motion.div>
  );
};

export default StaggerChildren;
