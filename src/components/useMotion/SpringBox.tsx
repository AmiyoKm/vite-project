import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SpringBox = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });
    const handleTap = () => {
        x.set(Math.random() * 300); // Random x position
        y.set(Math.random() * 300); // Random y position
    };

    return (
        <div>
            <motion.div
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-32 h-32 bg-red-500"
                style={{ x : springX, y : springY }}
                onTap={handleTap} // Trigger position change on tap
            />
        </div>
    );
};

export default SpringBox;
