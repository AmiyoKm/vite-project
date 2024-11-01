import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverLinkedScale = () => {
  const x = useSpring(1);

  return (
    <motion.button
      onHoverStart={() => x.set(1.2)}
      onHoverEnd={() => x.set(1)}
      style={{ scale :x }}
      className="p-4 bg-blue-500 text-white rounded"
    >
      Hover Me
    </motion.button>
  );
};

export default HoverLinkedScale;