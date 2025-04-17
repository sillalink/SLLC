"use client";
import React, { useRef } from "react";
import Button from "../../../shared/ui/Button";
import Image from "next/image";
import team1 from "../../../../public/assets/team1.png";
import team3 from "../../../../public/assets/team3.png";
import about1 from "../../../../public/assets/about1.png";
import about2 from "../../../../public/assets/about2.png";
import about3 from "../../../../public/assets/about3.png";
import aboutSectionImage from "../../../../public/assets/aboutSectionImage.png";
import { LuSparkles } from "react-icons/lu";
import { FaStar, FaEye, FaGlobe } from "react-icons/fa6";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Title from "../Title";

const AboutSection = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberedSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);

  // Check if elements are in view
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isNumberedSectionInView = useInView(numberedSectionRef, {
    once: true,
    amount: 0.3,
  });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.3 });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.6, 1, 1, 0.6]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: any) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const numberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className="w-full"
      ref={sectionRef}
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative flex flex-col gap-8 max-w-[1260px] w-full mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full justify-center items-center">
          <Title title1="About" title2="Us" />
        </div>
        {/* Main grid container - simplified for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-4 lg:grid-rows-7">
          {/* First div - Title and intro text */}
          <motion.div
            className="w-full flex flex-col justify-end items-start lg:col-span-5 lg:row-span-3 p-4"
            ref={titleRef}
            variants={containerVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                The People <br className="hidden sm:block" />
                Behind <br className="hidden sm:block" />
                <motion.span
                  className="text-purple-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  SillaLink
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-gray-300 text-base md:text-lg"
                variants={itemVariants}
              >
                Silla-Link company have a passionate team of developers,
                designers, and innovators dedicated to crafting high-quality
                websites and applications that drive business growth. We combine
                cutting-edge technology with creative solutions to deliver
                digital experiences that users love.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button className="bg-primary rounded-2xl h-10 md:h-12 mt-2">
                  About us
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Second div - Team images */}
          <div className="flex w-full  gap-4 md:gap-6 lg:col-span-7 lg:row-span-2 p-2 md:p-4">
            <motion.div
              className="w-full sm:w-1/2"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Image
                src={team1 || "/placeholder.svg"}
                alt="Team member"
                width={300}
                height={400}
                className="rounded-lg rounded-br-[80px] sm:rounded-br-[120px] md:rounded-br-[180px] rounded-bl-[80px] sm:rounded-bl-[120px] md:rounded-bl-[180px] w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="w-full sm:w-1/2"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Image
                src={team3 || "/placeholder.svg"}
                alt="Team member"
                width={300}
                height={400}
                className="rounded-br-[80px] sm:rounded-br-[120px] md:rounded-br-[180px] rounded-bl-[80px] sm:rounded-bl-[120px] md:rounded-bl-[180px] w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Third div - Numbered sections */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9 lg:row-span-3 p-4"
            ref={numberedSectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isNumberedSectionInView ? "visible" : "hidden"}
          >
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              {[1, 2, 3].map((num, i) => (
                <motion.div
                  key={num}
                  className="space-y-3 md:space-y-4"
                  custom={i}
                  variants={numberVariants}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="h-1 w-12 md:w-16 bg-purple-600"
                      initial={{ width: 0 }}
                      animate={
                        isNumberedSectionInView
                          ? { width: "4rem" }
                          : { width: 0 }
                      }
                      transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                    />
                    <motion.h2
                      className="text-2xl md:text-3xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={
                        isNumberedSectionInView
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                    >
                      {num < 10 ? `0${num}` : num}
                    </motion.h2>
                  </div>
                  <motion.p
                    className="text-gray-300 text-sm md:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isNumberedSectionInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: i * 0.2 + 0.7, duration: 0.5 }}
                  >
                    {num === 1 &&
                      "We are a software company that believes every great idea deserves to come to life. We turn creativity into smart systems built for the future."}
                    {num === 2 &&
                      "We build high-quality software solutions that help you grow and evolve. With our expertise, we create tools that move you forward."}
                    {num === 3 &&
                      "Behind every line of code we write, there's a person we aim to serve."}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fourth div - Main image and features */}
          <div className="w-full flex flex-col justify-center items-center lg:col-span-7 lg:row-span-3 lg:row-start-4 p-2 md:p-4 mt-6 lg:mt-0">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={aboutSectionImage || "/placeholder.svg"}
                alt="Tech visualization"
                width={800}
                height={400}
                className="w-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="border border-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 my-6 sm:my-10 md:my-16 max-w-4xl mx-auto w-full"
              ref={featuresRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  {
                    icon: (
                      <LuSparkles className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                    ),
                    text: "The beginning of the idea.",
                  },
                  {
                    icon: (
                      <FaStar className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                    ),
                    text: "Excellence in every detail.",
                  },
                  {
                    icon: (
                      <FaEye className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                    ),
                    text: "We see what others do not see.",
                  },
                  {
                    icon: (
                      <FaGlobe className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                    ),
                    text: "We make an impact that transcends borders.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center md:items-start gap-2 p-2 sm:p-3 md:p-4"
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    animate={isFeaturesInView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={
                        isFeaturesInView
                          ? { rotate: 0, opacity: 1 }
                          : { rotate: -10, opacity: 0 }
                      }
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.p
                      className="text-xs sm:text-sm text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={
                        isFeaturesInView ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
                    >
                      {feature.text}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Fifth div - Image gallery */}
          <motion.div
            className="lg:col-span-12 lg:row-span-2 p-2 md:p-4 mt-4 lg:mt-0"
            ref={galleryRef}
            variants={containerVariants}
            initial="hidden"
            animate={isGalleryInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[about1, about2, about3].map((src, i) => (
                <motion.div
                  key={i}
                  className={`h-[150px] sm:h-[180px] md:h-[200px] rounded-lg overflow-hidden ${
                    i === 2 ? "sm:col-span-2 md:col-span-1" : ""
                  }`}
                  custom={i}
                  variants={galleryItemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${i + 1}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
