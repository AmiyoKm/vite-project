import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={{ top: 50, left: -50, right: 50, bottom: -50 }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer items-center flex flex-col"
    >
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1729171818790-99bf5bdf6898?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Card"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Card title</h2>
        <p className="text-gray-700 mb-4">
          This is a description of the card.This is a simple card with a
          description.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
