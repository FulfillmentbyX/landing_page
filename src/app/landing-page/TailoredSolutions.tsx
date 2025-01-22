import Store from "@/assets/images/store.png";
import Image from "next/image";
import Wallet from "@/assets/images/Wallet.png";
import DeliveryVan from "@/assets/images/DeliveryVan.png";
import Man from "@/assets/images/Man.png";
import { Fade } from "react-awesome-reveal";

export const TailoredSolutions = () => {
  return (
    <div>
      <div className="px-5 flex flex-col items-center justify-center py-10 gap-6 md:px-16 md:py-20 bg-[#F7F7F7] w-full h-auto">
        <Fade duration={3000}>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            Tailored solutions for your success.
          </h2>
          <div className="w-full flex flex-col md:flex-row md:gap-6 gap-10 justify-center items-center mt-10">
            <div className="bg-[#EBEEEA] flex flex-col  justify-between w-full md:w-[584px] rounded-3xl h-auto min-[400px]  md:h-[698px] relative">
              <div className="py-10 px-9 flex flex-col gap-5 z-10 flex-grow">
                <h2 className="font-bold text-3xl">Storehouse booking</h2>
                <p className="text-xl font-light leading-relaxed">
                  At FulfillmentbyX, we provide a cutting-edge e-commerce order
                  fulfillment platform that empowers African vendors to
                  effortlessly sell and deliver their products in Ghana.
                </p>
              </div>

              <div className="w-full absolute bottom-0">
              <Image
                src={Store}
                alt="store"
                className=" w-full rounded-b-3xl"
              />
              </div>
            </div>

            <div className="bg-[#F3E7DE] flex flex-col justify-between w-full md:w-[584px] rounded-3xl h-auto md:h-[698px] relative">
              <Image src={Wallet} alt="store" className=" w-full rounded-b-3xl" />
              <div className="py-10 flex flex-col gap-5 px-9 z-10">
                <h2 className="font-bold text-3xl">Payment services</h2>
                <p className="font-light text-xl leading-relaxed">
                  At FulfillmentbyX, we provide a cutting-edge e-commerce order
                  fulfillment platform that empowers African vendors to
                  effortlessly sell and deliver their products in Ghana.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center  bg-[#F8F2F2] rounded-3xl mt-10 w-full">
          <div className=" w-[90%] sm:w-[90%] md:w-[45%] p-4 sm:p-4 md:p-8 flex flex-col justify-center max-w-full">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Order Fulfilment
              </p>
              <p className="font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4 leading-normal">
                At FulfillmentbyX, we provide a cutting-edge e-commerce order
                fulfillment platform that empowers African vendors to
                effortlessly sell and deliver their products in Ghana.
              </p>
            </div>
            <Image
              src={DeliveryVan}
              alt=""
              className=" h-auto rounded-3xl"
            />
           
          </div>
        </Fade>
      </div>

      <div className="md:px-16 md:py-20 px-5 py-10 h-auto w-full bg-[#A83E45] text-white flex flex-col md:flex-row justify-center gap-10 md:gap-20">
        <div className="w-full md:w-[510px] flex justify-center">
          <Image src={Man} alt="man" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col h-auto justify-center w-full md:w-[60%] gap-7">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-4xl">
              Expand Your Reach.
            </h2>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-4xl">
              Fulfill Orders.
            </h2>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-4xl">
              Accelerate Your Success.
            </h2>
          </div>
          <div className="flex flex-col gap-7 text-lg sm:text-xl md:text-xl leading-relaxed">
            <p>
              At FulfillmentbyX, we provide a cutting-edge e-commerce order
              fulfillment platform that empowers African vendors to effortlessly
              sell and deliver their products in Ghana.
            </p>

            <p>
              Our streamlined solution is designed to help you scale your
              business, reach new customers, and optimize the fulfillment
              process—all while reducing overhead and improving customer
              satisfaction.
            </p>
            <p className="font-semibold text-xl  cursor-pointer">
              Learn more &gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
