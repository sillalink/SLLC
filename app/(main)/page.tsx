"use client"
import Image from 'next/image';
import AboutSection from './components/about/AboutSection';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection';
import layer from "../../public/assets/layer1.svg"
import ProjectSection from './components/projects/ProjectSection';

export default function HomePage() {
  return (
    <div className='w-full relative'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div>
        <Image src={layer} className='w-60 absolute opacity-50' alt='layer'/>
      </div>
      <ProjectSection/>
    </div>
  )
}