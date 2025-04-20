// components/ExampleCard.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: ReactNode;
  icons?: string[];
}

function ProjectCard({
  title,
  description,
  imageUrl,
  icons,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-dark rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-purple md:p-3"
      whileHover={{ y: -5 }}
    >
      {imageUrl && (
        <div className="h-56 overflow-hidden relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Team member"
            width={300}
            height={400}
            className="rounded-br-[80px] sm:rounded-br-[120px] md:rounded-br-[180px] rounded-bl-[80px] sm:rounded-bl-[120px] md:rounded-bl-[180px] w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-100 mb-6 text-small">{description}</p>
      </div>
      <div className="w-full flex flex-wrap gap-4 p-3 justify-between items-center">
        <div className="flex">
          {icons?.map((icon: string , idx) => (
            <Image
              key={idx}
              src={icon}
              alt={icon}
              className="p-1 shadow-icon mx-[-1px] rounded-full"

            ></Image>
          ))}
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href={''} className="w-full rounded-lg text-extraSmall  bg-gray-dark border border-purple px-2 py-3 text-purple hover:bg-purple hover:text-white">

            Check Live Site
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
