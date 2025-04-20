import MuiIcon from '@/public/assets/MUIicon.svg'
import GoIcon from '@/public/assets/GoIcon.svg'
import figmaIcon from '@/public/assets/figmaIcon.svg'
import ReactIcon from '@/public/assets/ReactIcon.svg'
import CssIcon from '@/public/assets/CssIcon.svg'
import NodeIcon from '@/public/assets/NodeIcon.svg'
import JavaScriptIcon from '@/public/assets/JavaScriptIcon.svg'
import MongoIcon from '@/public/assets/MongoIcon.svg'
import TypeScriptIcon from '@/public/assets/TypeScriptIcon.svg'
import NextIcon from '@/public/assets/NextIcon.svg'
import TailwindIcon from '@/public/assets/tailwindIcon.svg'
import FlutterIcon from '@/public/assets/FlutterIcon.svg'
import HtmlIcon from '@/public/assets/HtmlIcon.svg'
import ViteIcon from '@/public/assets/ViteIcon.svg'
import { Service } from '../types'
import { FaCode as Code } from "react-icons/fa";
import { BiSolidBarChartSquare as BarChart3 } from "react-icons/bi";
import { RiLightbulbFlashFill as Lightbulb } from "react-icons/ri";
import { FiPenTool as PenTool } from "react-icons/fi";

export const icons = [
    {
      icon: MuiIcon,
      alt: "MUIIcon"
    },
    {
      icon: GoIcon,
      alt: "Go icon"
    },
    {
      icon: figmaIcon,
      alt: "Figma icon"
    },
    {
      icon: ReactIcon,
      alt: "React icon"
    },
    {
      icon: CssIcon,
      alt: "Css icon"
    },
    {
      icon: NodeIcon ,
      alt: "Node icon"
    },
    {
      icon: MongoIcon,
      alt: "Mongo Icon"
    },
    {
      icon: HtmlIcon,
      alt: "Html icon"
    },
    {
      icon: TypeScriptIcon,
      alt: "Type script icon"
    },
    {
      icon: NextIcon,
      alt: "next icon"
    },
    {
      icon: FlutterIcon,
      alt: "Flutter icon"
    },
    {
      icon: TailwindIcon,
      alt: "Tailwind icon"
    },
    {
      icon: ViteIcon,
      alt: "Vite icon"
    },
    {
      icon: JavaScriptIcon,
      alt: "javaScript icon"
    },
  ]

  export const services: Service[] = [
    {
      title: "UI/UX Design",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      delay: 0.1
    },
    {
      title: "Software Development",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <Code className="w-8 h-8 text-white" />,
      delay: 0.2
    },
    {
      title: "Data Analysis",
      description: "We help you extract valuable insights from your data, enabling smarter decisions and business growth.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      delay: 0.3
    },
    {
      title: "Project Consulting",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      delay: 0.4
    }
  ];
  
  