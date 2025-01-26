import Carton from "@/assets/images/carton.png"
import Image from "next/image";
import Electronics from "@/assets/images/Electronics.png";
import Footwear from "@/assets/images/footwear.png";
import Mic from "@/assets/images/mic.png";
import Top from "@/assets/images/Shirt.png"
import Cosmetics from "@/assets/images/Cosmetic.png";
import Books from "@/assets/images/books.png"
import Home from "@/assets/images/decor.png"
import Toy from "@/assets/images/Toy.png"

const items = [
    {
        id: 1,
        imgUrl: Top,
        text: "Clothing and apparel"
    },
  
    {
        id: 3,
        imgUrl: Electronics,
        text: "Electronics & Gadgets"
    },
    {
        id: 4,
        imgUrl: Mic,
        text: "Food and Beverages"
    },
    {
        id: 5,
        imgUrl: Cosmetics,
        text: "Cosmetics & Skincare"
    },
    {
        id: 6,
        imgUrl: Books,
        text: "Books & Stationery"
    },
    {
        id: 7,
        imgUrl: Home,
        text: "Home Decor"
    },
    {
        id: 4,
        imgUrl: Toy,
        text: "Toys & Games"
    },
    {
      id: 2,
      imgUrl: Footwear,
      text: "Footwear"
  },
 
]
export const ReliableFulfillment = () => {
    return (
<div className="px-5 py-10 gap-6 md:px-20 md:py-24 mt-20 bg-[#F8F2F2] flex flex-col items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-between gap-7">
    <div className="w-full md:w-[60%] flex flex-col gap-8 items-center h-full justify-center">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[2.5rem] text-center md:text-left">
        Fulfillment for Every Need; Reliable Solutions for a Wide Range of Products
      </h2>
      <p className="font-normal text-lg sm:text-xl leading-normal mt-2 pr-0 md:pr-10 text-center md:text-left">
        At FulfillmentbyX, we specialize in fulfilling orders for a diverse range of products. Whether you’re dealing with small, delicate items or large, bulk shipments, our platform is designed to handle your unique requirements efficiently and securely.
      </p>
    </div>
    <div className="w-full md:w-[50%] mt-5 md:mt-0">
      <Image src={Carton} alt="carton" className="w-full h-auto" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-10 mt-10">
    {items.map((item) => (
      <div
        key={item.id}
        className="w-full sm:w-[288px] md:h-[156px] h-[84px] bg-white border border-black rounded-2xl px-5 flex items-center justify-center gap-4"
      >
        <Image src={item.imgUrl} alt="" className="" />
        <p className="text-lg sm:text-xl">{item.text}</p>
      </div>
    ))}
  </div>
</div>

    )
}