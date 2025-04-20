// components/CinemaSlider.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import CinemaCard from './WorkExperience/CinemaCard';

interface CinemaSliderProps {
  cards: {
    icon: React.ReactNode;
    title: string;
    description: string;
    imageUrl: string;
  }[];
  className?: string;
}

const CinemaSlider: React.FC<CinemaSliderProps> = ({ cards, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);

  // Responsive settings
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
        setCardWidth(window.innerWidth * 0.85);
        setGap(16);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
        setCardWidth(window.innerWidth * 0.45);
        setGap(20);
      } else {
        setVisibleCards(3);
        setCardWidth(400);
        setGap(24);
      }
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (cards.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (cards.length - visibleCards + 1)) % (cards.length - visibleCards + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setMoveX(e.touches[0].clientX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    if (moveX < -50) {
      nextSlide();
    } else if (moveX > 50) {
      prevSlide();
    }
    
    setIsDragging(false);
    setMoveX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMoveX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    if (moveX < -50) {
      nextSlide();
    } else if (moveX > 50) {
      prevSlide();
    }
    
    setIsDragging(false);
    setMoveX(0);
  };

  return (
    <div className={`relative w-full md:px-6 ${className}`}>
      <div 
        ref={sliderRef}
        className="relative h-[500px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <AnimatePresence>
          <motion.div
            className="absolute top-0 left-0 h-full flex"
            style={{
              gap: `${gap}px`,
              x: -currentIndex * (cardWidth + gap) + moveX,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {cards.map((card, index) => {
              const isActive = index >= currentIndex && index < currentIndex + visibleCards;
              const isCenter = index === currentIndex + Math.floor(visibleCards / 2);
              
              return (
                <motion.div
                  key={index}
                  className="h-full"
                  style={{
                    width: `${cardWidth}px`,
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setCurrentIndex(Math.max(0, Math.min(index - Math.floor(visibleCards / 2), cards.length - visibleCards)));
                    }
                  }}
                >
                  <CinemaCard 
                    {...card} 
                    isActive={isCenter}
                    className="h-full cursor-pointer"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 shadow-lg transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: cards.length - visibleCards + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CinemaSlider;