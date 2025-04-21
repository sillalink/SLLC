// components/CinemaCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CinemaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  isActive?: boolean;
  className?: string;
}

const CinemaCard: React.FC<CinemaCardProps> = ({ 
  icon, 
  title, 
  description, 
  imageUrl, 
  isActive = false,
  className = '' 
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl border border-primary bg-indego-dark overflow-hidden shadow-xl transition-all duration-500 ${className}`}
      initial={false}
      animate={{
        scale: isActive ? 1.05 : 0.95,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
      
      <div className="relative z-20 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className=" text-primary  p-2 rounded-lg ">
              {icon}
            </div>
            <h3 className={`text-medium md:text-[26px] z-20 font-bold ${isActive ? 'text-gray-100' : 'text-gray-200'}`}>
              {title}
            </h3>
          </div>
          
          <motion.p 
            className={`text-lg text-gray-100 z-20${isActive ? 'text-gray-100' : 'text-gray-300'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0.7,
              y: isActive ? 0 : 20
            }}
            transition={{ delay: isActive ? 0.2 : 0 }}
          >
            {description}
          </motion.p>
        </div>
        <div className='w-full flex justify-center items-center rounded-lg '>

          <motion.img
        src={imageUrl}
        alt={title}
        className=" inset-0 w-full rounded-lg h-[200px] object-cover"
        initial={false}
        animate={{
          filter: isActive ? 'brightness(1)' : 'brightness(0.7)',
        }}
        transition={{ duration: 0.5 }}
      />
        </div>
      </div>
      {/* <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-dark to-transparent opacity-50 z-10'></span> */}
      {/* <motion.img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={false}
        animate={{
          filter: isActive ? 'brightness(1)' : 'brightness(0.7)',
        }}
        transition={{ duration: 0.5 }}
      /> */}
    </motion.div>
  );
};

export default CinemaCard;