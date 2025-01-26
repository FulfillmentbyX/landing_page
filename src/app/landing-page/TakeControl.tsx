import Bg from "@/assets/images/TakeControlbg.png"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
// import { Button } from "../ui/button"
export const TakeControl = () => {
    return (
       <Fade duration={3000}>
      <div className="relative">
      <Image src={Bg} alt="" className="w-full h-[291px] md:h-[600px]" />
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-5 sm:px-10 md:px-14">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-5 sm:mb-7 md:mb-10">
          Take control of your fulfilment
        </h1>
        <p className="text-lg  md:block sm:text-xl md:text-2xl font-medium">
          Join the growing number of African vendors scaling their e-commerce<br className="hidden sm:block" /> businesses
        </p>
        <p className="text-lg  md:block sm:text-xl md:text-2xl font-medium mt-2">
          Sign up now and start reaching customers in Ghana with ease!
        </p>
    
        <div className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-medium text-black bg-white  border rounded-3xl w-[125px] sm:w-[280px] md:w-[338px] h-[50px] sm:h-[55px] md:h-[60px] my-5 sm:my-6 md:my-7 cursor-pointer">
          Get Started
        </div>
      </div>
    </div>
    </Fade>
    
    )
}