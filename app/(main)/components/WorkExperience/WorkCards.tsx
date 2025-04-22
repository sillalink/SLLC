// components/ExampleCard.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface WorkCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  icons?: string[];
}
function WorkCard({
  title,
  description,
  icons,
}: WorkCardProps) {
  return (
    <motion.div
      className="bg-indego-dark rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-purple md:p-3"
      whileHover={{ y: -5 }}
    >
    </motion.div>
  );
}

export default WorkCard;
