// components/ExampleCard.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ExampleCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: ReactNode;
}

export function ExampleCard({ title, description, imageUrl, children }: ExampleCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100"
      whileHover={{ y: -5 }}
    >
      {imageUrl && (
        <div className="h-56 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {children && (
          <div className="mt-auto">
            <motion.button 
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}