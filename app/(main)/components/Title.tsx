"use client"
import Image from "next/image"
import Signature from "../../../public/assets/Signature.svg"
const Title = ({ title1, title2 }: { title1: string, title2: string }) => {
  return (
    <div className="w-full h-12 text-[35px] text-white flex justify-center items-center"  style={{ fontFamily: "'Inspiration', cursive" }}>
      <p className="font-[var(--font-inspiration)] flex justify-center items-center relative z-10 w-[500px] h-[100px]">
        {title1}
        <span className="text-primary ml-1">{title2}</span>
        <span className="flex absolute z-[-1] place-content-center w-3/5 md:w-full h-2/5 md:h-[50%] rounded-full blur-xl bg-[#ffffff62] "></span>
        <Image src={Signature} alt="Signature" className="absolute place-content-center w-1/2 h-1/2 md:w-full md:h-full " />
      </p>
    </div>
  )
}

export default Title
