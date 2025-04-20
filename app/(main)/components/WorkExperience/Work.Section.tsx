import React from 'react'
import { 
    FiGlobe, 
    FiCloud, 
    FiCpu, 
    FiDatabase, 
    FiShield,
    FiCode,
    FiServer
  } from 'react-icons/fi';
import CinemaSlider from '../CinemaSlider';
import Title from '../Title';

const WorkExperience = () => {

    const techCards = [
        {
          icon: <FiGlobe size={50} />,
          title: 'Web Development',
          description: 'Modern web applications with cutting-edge technologies',
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
          icon: <FiCloud size={60} />,
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure for your business needs Scalable cloud infrastructure for your business needs Scalable cloud infrastructure for your business needs',
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80'
        },
        {
          icon: <FiCpu size={50} />,
          title: 'AI Integration',
          description: 'Smart solutions powered by artificial intelligence',
          imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c81364f4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
        },
        {
          icon: <FiDatabase size={50} />,
          title: 'Big Data',
          description: 'Harness the power of your data with our analytics',
          imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1465&q=80'
        },
        {
          icon: <FiShield size={50} />,
          title: 'Cyber Security',
          description: 'Enterprise-grade protection for your digital assets',
          imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
          icon: <FiCode size={50} />,
          title: 'DevOps',
          description: 'Streamlined development and deployment pipelines',
          imageUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
          icon: <FiServer size={50} />,
          title: 'Infrastructure',
          description: 'Reliable and scalable server architecture',
          imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
        }
      ];
      

  return (
   <main id='experience' className="py-16 px-4  sm:px-6 lg:px-8 bg-gray-dark">
      <div className=" mx-auto max-w-[1260px] w-full">
        <div className="text-center mb-16">
        <Title title1='Exper' title2='ience'  />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-16">
            Innovative solutions for the digital age with cutting-edge technology
          </p>
        </div>
        
        <CinemaSlider cards={techCards} />
      </div>
    </main>
  )
}

export default WorkExperience
