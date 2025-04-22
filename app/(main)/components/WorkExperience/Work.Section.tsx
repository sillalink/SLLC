import React from 'react';
import { 
  FiGlobe, 
  FiCloud, 
  FiCpu, 
  FiDatabase, 
  FiShield,
  FiCode,
  FiServer,
  FiCheckCircle
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import Title from '../Title';
import Image from 'next/image';
import workImage from '@/public/assets/Teamgoals.svg'; // Replace with your actual image path

const WorkExperience = () => {
  const techCards = [
    {
      icon: <FiGlobe size={24} className="text-indigo-400" />,
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
    },
    {
      icon: <FiCloud size={24} className="text-indigo-400" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for your business needs',
    },
    {
      icon: <FiCpu size={24} className="text-indigo-400" />,
      title: 'AI Integration',
      description: 'Smart solutions powered by artificial intelligence',
    },
    {
      icon: <FiDatabase size={24} className="text-indigo-400" />,
      title: 'Big Data',
      description: 'Harness the power of your data with our analytics',
    },
  ];

  const methodologyPoints = [
    { icon: <FiCheckCircle className="text-indigo-400" />, text: 'Innovative methodology' },
    { icon: <FiCheckCircle className="text-indigo-400" />, text: 'Accurate data analysis' },
    { icon: <FiCheckCircle className="text-indigo-400" />, text: 'Artificial Intelligence and Machine Learning' },
    { icon: <FiCheckCircle className="text-indigo-400" />, text: 'Customized solutions' },
  ];

  return (
    <main id='experience' className="py-20 px-4 sm:px-6 lg:px-8 bg-indego-dark">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <Title title1='Exper' title2='ience' />
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mt-6">
            The techniques we use to make our projects successful
          </p>
        </div>

        {/* Methodology and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Our Proven Approach
            </h3>
            <ul className="space-y-4">
              {methodologyPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-1 mr-3">{point.icon}</span>
                  <span className="text-indigo-100">{point.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden border "
          >
            <Image
              src={workImage}
              alt="Our work process"
              fill
              className=""
              quality={100}
            />
          </motion.div>
        </div>

        {/* Work Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 p-3 bg-indigo-900/50 rounded-lg w-fit">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-indigo-200">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;