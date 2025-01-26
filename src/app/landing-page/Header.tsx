import { Button } from "@/components/ui/button";
import FBX from "@/assets/images/FbxLogo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="px-5 py-2 md:px-16 flex items-center justify-between flex-wrap shadow md:shadow-none">
        <div className="flex-shrink-0">
          <Image
            alt="fbx-logo"
            src={FBX}
            className="w-[60px] h-[28px] md:w-[80px] md:h-[40px] mt-5"
          />
        </div>

        <div className="flex items-center gap-6 pt-3 md:gap-4 mt-4 md:mt-0">
          <Button
            title="Get Started"
            className="rounded-3xl text-white md:block w-32 md:w-40 h-10 md:h-[54px] text-sm md:text-base"
          />
          {/* <Link to={"/login"}> */}
          <button className="border-2 border-red-700 rounded-3xl w-20 md:w-[116px] h-10 md:h-[54px] text-sm md:text-base font-medium text-red-700">
            Log In
          </button>
          {/* </Link> */}
          <p className="text-base md:text-xl hidden md:block font-medium cursor-pointer">
            Contact us
          </p>
        </div>
      </div>
      <hr className="border-gray-300 mt-4 hidden md:block" />
    </>
  );
};
