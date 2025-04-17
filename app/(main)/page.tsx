"use client"
import AboutSection from './components/about/AboutSection';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </>
  )
}