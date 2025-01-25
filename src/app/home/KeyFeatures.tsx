import Analytics from "@/assets/images/Analytics.png";
import Image from "next/image";
import Grad from "@/assets/images/Grad.png";
import Payment from "@/assets/images/Payment.png";
import Industry from "@/assets/images/Industry.png";
import Box from "@/assets/images/Box.png";
import Mobile from "@/assets/images/mobile.png";
import { Fade } from "react-awesome-reveal";

const cardData = [
  {
    id: 1,
    title: "Storehouse Booking",
    description:
      "Real-time availability and automated reservations and booking of storage spaces.",
    imgSrc: Industry,
  },
  {
    id: 2,
    title: "Fulfilment Management",
    description:
      "Streamlined creation, tracking, and management of purchase and sales orders to promote accurate and timely delivery.",
    imgSrc: Mobile,
  },
  {
    id: 3,
    title: "Inventory Management",
    description:
      "Real-time stock tracking, automated alerts, and batch management of inventory.",
    imgSrc: Box,
  },
  {
    id: 4,
    title: "Wallet and Payments",
    description:
      "Multi-payment methods, in-app wallet, and automated invoicing as well as transaction monitoring and management.",
    imgSrc: Payment,
  },
  {
    id: 5,
    title: "Learning Resources",
    description:
      "Access free and paid courses, track learning progress, and explore interactive tutorials.",
    imgSrc: Grad,
  },
  {
    id: 6,
    title: "Analytics and Reports",
    description:
      "Real-time dashboards, customizable reports, and predictive analytics, metrics for tracking.",
    imgSrc: Analytics,
  },
];

export const KeyFeautures = () => {
  return (
    <Fade duration={3000}>
      <div className="md:px-10 md:py-20 bg-white w-full h-auto px-5 py-10">
        <div className=" flex items-center justify-center flex-col gap-3">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Key features
          </h2>
          <p className="sm:text-xl text-lg text-center ">
            Discover some of our Key Features that drive efficiency and success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5 w-full">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`md:w-auto w-full bg-[#D9D9D9] border-black border-2 rounded-3xl py-7 px-5`}
            >
              <div className="w-[120px] h-[120px] bg-[#FFFFFF] flex items-center justify-center rounded-full">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-12 h-12"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-2xl py-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};
