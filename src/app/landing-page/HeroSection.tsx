import { Button } from "@/components/ui/button";
import bg from "@/assets/images/Herobg.png"
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
export const HeroSection = () => {
    return (
        
  <div className="px-5 py-10 gap-6 md:px-16 md:py-20 bg-[#F8F2F2] flex items-center justify-center">
    <Fade duration={2000}  className="flex flex-col justify-center items-center" >
  <div className="flex flex-col justify-center items-center gap-8 w-full md:w-[70%] lg:w-[80%]">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug">
      Unlock Seamless E-Commerce Growth Across Africa with FBX
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
      Experience total control over your fulfillment operations with a platform that lets you oversee inventory, track storage, and fulfill orders remotely.
    </p>
    <div className="flex flex-col md:flex-row items-center mb-5 md:mb-10 gap-6">
    <Button
      title="Try it Now"
      className="rounded-3xl w-[200px] text-white sm:w-[244px] h-10 sm:h-[54px]  text-sm sm:text-base"
    />
    <button className="border-2 border-red-700 rounded-3xl  w-[200px] sm:w-[244px] h-10 sm:h-[54px]  text-sm sm:text-base font-medium text-red-700">
    Book a Demo
      </button>
    </div>
    <div className="w-full">
      <Image src={bg} alt="Background" className="w-full h-auto" />
    </div>
  </div>
  </Fade>
</div>



    )
}