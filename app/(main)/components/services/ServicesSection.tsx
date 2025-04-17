"use client"

import { motion } from "framer-motion"
import Title from "../Title"
import Button from "@/app/shared/ui/Button"

export default function ServicesSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const arrowVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
    },
  }

  return (
    <div className="min-h-screen px-4 py-16 md:px-8 lg:px-16 relative overflow-hidden">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="w-full justify-center items-center">
          <Title title1="Serv" title2="ices" />
        </div>
      </motion.div>

      {/* Services Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative"
      >
        {/* Service Cards */}
        <div className="relative">
          {/* UI/UX Design */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24 relative z-10">
            <div className="bg-[#1D1830] border border-primary rounded-2xl p-6 flex items-center gap-6 shadow-sm">
              <div className="bg-purple-700 rounded-full p-4 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 15C27.7614 15 30 12.7614 30 10C30 7.23858 27.7614 5 25 5C22.2386 5 20 7.23858 20 10C20 12.7614 22.2386 15 25 15Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 30C17.7614 30 20 27.7614 20 25C20 22.2386 17.7614 20 15 20C12.2386 20 10 22.2386 10 25C10 27.7614 12.2386 30 15 30Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="md:text-2xl text-gray-400 font-light mb-2 text-small">UI/UX Design</h3>
                <p className="text-gray-500 text-verySmall md:text-medium">
                  We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and
                  aesthetics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Software Development */}
          <motion.div
            variants={itemVariants}
            className="mb-16 md:mb-24 ml-auto md:ml-24 lg:ml-48 relative z-10 max-w-[90%] md:max-w-[80%]"
          >
            <div className="bg-[#1D1830] border border-primary rounded-2xl p-6 flex items-center gap-1 md:gap-6 shadow-sm text-small">
              <div className="bg-purple-700 rounded-full p-4 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 12L8 20L15 28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 12L32 20L25 28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="md:text-2xl text-gray-400 font-light mb-2 text-small">Software Development</h3>
                <p className="text-gray-500 text-verySmall md:text-medium">
                  We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and
                  aesthetics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Analysis */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24 relative z-10 max-w-[90%]">
            <div className="bg-[#1D1830] border border-primary rounded-2xl p-6 flex items-center gap-6 shadow-sm">
              <div className="bg-purple-700 rounded-full p-4 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="18" width="8" height="14" rx="1" stroke="white" strokeWidth="2" />
                  <rect x="22" y="8" width="8" height="24" rx="1" stroke="white" strokeWidth="2" />
                  <path d="M15 14C15 14 17 10 20 10C23 10 25 14 25 14" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="md:text-2xl text-gray-400 font-light mb-2 text-small">Data Analysis</h3>
                <p className="text-gray-500 text-verySmall md:text-medium">
                  We help you extract valuable insights from your data, enabling smarter decisions and business growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Consulting */}
          <motion.div
            variants={itemVariants}
            className="mb-16 md:mb-24 ml-auto md:ml-24 lg:ml-48 relative z-10 max-w-[90%] md:max-w-[80%]"
          >
            <div className="bg-[#1D1830] border border-primary rounded-2xl p-6 flex items-center gap-6 shadow-sm">
              <div className="bg-purple-700 rounded-full p-4 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M20 15V25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 20H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="md:text-2xl text-gray-400 font-light mb-2 text-small">Project Consulting</h3>
                <p className="text-gray-500 text-verySmall md:text-medium">
                  We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and
                  aesthetics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Animated Arrows - Only visible on medium screens and up */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Arrow 1: UI/UX to Software Dev (right to left) */}
            <motion.svg
              width="300"
              height="150"
              viewBox="0 0 300 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[12%] right-[-50px]"
              style={{ zIndex: 5 }}
            >
              <motion.path
                d="M0,20 C150,20 200,130 300,130"
                stroke="#7e22ce"
                strokeWidth="2"
                fill="transparent"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.polygon
                points="290,125 300,130 290,135"
                fill="#7e22ce"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>

            {/* Arrow 2: Software Dev to Data Analysis (left to right) */}
            <motion.svg
              width="300"
              height="150"
              viewBox="0 0 300 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[37%] left-[-50px]"
              style={{ zIndex: 5 }}
            >
              <motion.path
                d="M0,130 C100,130 150,20 300,20"
                stroke="#7e22ce"
                strokeWidth="2"
                fill="transparent"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.polygon
                points="290,15 300,20 290,25"
                fill="#7e22ce"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>

            {/* Arrow 3: Data Analysis to Project Consulting (right to left) */}
            <motion.svg
              width="300"
              height="150"
              viewBox="0 0 300 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[62%] right-[-50px]"
              style={{ zIndex: 5 }}
            >
              <motion.path
                d="M0,20 C150,20 200,130 300,130"
                stroke="#7e22ce"
                strokeWidth="2"
                fill="transparent"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.polygon
                points="290,125 300,130 290,135"
                fill="#7e22ce"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </div>
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center mt-8"
        >

          <Button variant="primary" className="rounded-lg">
            See more
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
