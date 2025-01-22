"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import StorageBg from "@/assets/images/BookStorage.png"
import Image, { type StaticImageData } from "next/image"
import InventoryBg from "@/assets/images/Inventory.png"
import OrderBg from "@/assets/images/OrderBg.png"
import Fulfil from "@/assets/images/fulfil.png"
import { Fade } from "react-awesome-reveal"
import { ReliableFulfillment } from "./ReliableFulfillment"
// import { Book } from 'lucide-react';

export const HowItWorks = () => {
  const [selected, setSelected] = useState("inventory")
  const handleClick = (button: string): void => {
    setSelected(button)
  }

  const getContent = () => {
    let result
    switch (selected) {
      case "storage":
        result = {
          title: "Book Your Storage with Ease in 4 Simple Steps",
          sections: [
            {
              title: "Choose preferred storage",
              text: "Browse and select from our wide range of storage facilities tailored to meet your specific needs and preferences",
            },
            {
              title: "Select your requirements",
              text: "Define your storage requirements, including the desired duration and any additional specifications for the chosen facility.",
            },
            {
              title: "Make payment",
              text: "Finalize your booking by making a payment using your preferred payment method. This step ensures your reservation is validated and secured.",
            },
            {
              title: "Manage and use storehouses",
              text: "Once your booking is complete, gain full access to view, manage, and utilize your reserved storehouses directly from our platform.",
            },
          ],
          imageSrc: StorageBg,
        }
        break
      case "order":
        result = {
          title: "Fulfill Your Orders with Ease: From Creation to Completion",
          sections: [
            {
              title: "Create an order",
              text: 'Select the type of order, either ‘sales order’ or ‘purchase order’, from the side navigation. Then click on the "Create Order" button to begin.',
            },
            {
              title: "Specify items to be in the order",
              text: "Choose the items you wish to include in the order. Provide the necessary details for each item, such as name, quantity, and other details provided.",
            },
            {
              title: "Specify order details",
              text: "Fill out the details of the order. This includes providing the time & date for fulfillment, recipient or supplier info and other required details. ",
            },
            {
              title: "Proceed to payment",
              text: "Once your booking is complete, gain full access to view, manage, and utilize your reserved storehouses directly from our platform.",
            },
            {
              title: "Manage and monitor pending orders",
              text: "After successful payment and order creation, you can monitor its progress, view the order details and manage all your orders on the platform.",
            },
          ],
          imageSrc: OrderBg,
        }
        break
      case "inventory":
        result = {
          title: "Manage Your Inventory Seamlessly",
          sections: [
            {
              title: " Choose preferred storage",
              text: "Browse and select from our wide range of storage facilities tailored to meet your specific needs and preferences",
            },
            {
              title: " Select your requirements",
              text: "Define your storage requirements, including the desired duration and any additional specifications for the chosen facility.",
            },
            {
              title: " Make payment",
              text: "Finalize your booking by making a payment using your preferred payment method. This step ensures your reservation is validated and secured.",
            },
            {
              title: " Manage and use storehouses",
              text: "Once your booking is complete, gain full access to view, manage, and utilize your reserved storehouses directly from our platform.",
            },
          ],
          imageSrc: InventoryBg,
        }
        break
      default:
        result = {}
        break
    }
    const defaultImageSrc: StaticImageData = StorageBg

    return {
      ...result,
      imageSrc: result.imageSrc || defaultImageSrc,
    }
  }

  const content = getContent()

  return (
    <Fade duration={3000}>
      <div className="md:block">
        <div>
          <div className="px-5 py-2 md:px-16 md:py-20 bg-white w-full h-auto">
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">How it works</h2>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-7 justify-center my-5 w-full">
                <div
                  className={`w-full sm:w-[300px] text-lg sm:text-xl flex justify-center items-center cursor-pointer h-[56px] ${
                    selected === "storage" ? "bg-[#EEE4E1] font-semibold text-red-800" : "bg-[#F7F7F7]"
                  } border border-gray-200 rounded-xl`}
                  onClick={() => handleClick("storage")}
                >
                  Storage Booking
                </div>
                <div
                  className={`w-full sm:w-[300px] text-lg sm:text-xl flex justify-center items-center cursor-pointer h-[56px] ${
                    selected === "inventory" ? "bg-[#EEE4E1] font-semibold text-red-800" : "bg-[#F7F7F7]"
                  } border border-gray-200 rounded-xl`}
                  onClick={() => handleClick("inventory")}
                >
                  Inventory Management
                </div>

                <div
                  className={`w-full sm:w-[300px] text-lg sm:text-xl flex justify-center items-center cursor-pointer h-[56px] ${
                    selected === "order" ? "bg-[#EEE4E1] font-semibold text-red-800" : "bg-[#F7F7F7]"
                  } border border-gray-200 rounded-xl`}
                  onClick={() => handleClick("order")}
                >
                  Order Fulfillment
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-5 h-auto py-2 md:px-16 md:py-20 rounded-3xl">
                <div>
                  <Image src={content.imageSrc || "/placeholder.svg"} alt="Section illustration" />
                </div>
                <div className="py-5 px-5 gap-6 md:px-16 flex flex-col mt-10 md:py-20 bg-[#F8F2F2] rounded-2xl h-auto w-full">
                  <h2 className="text-3xl font-bold text-center mb-5">{content.title}</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.sections?.map((section, index) => (
                      <div key={`${section.title}-${index}`} className="flex gap-4">
                        <div className="bg-[#AF0915] text-white rounded-full flex items-center justify-center w-10 h-10 shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-xl md:text-2xl font-medium">{section.title}</h4>
                          <p className="font-thin text-base md:text-xl">{section.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReliableFulfillment />
        <div className="py-5 px-5 gap-6 md:px-16  md:py-20 bg-[#A83E45] text-white w-full">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col justify-center w-full md:w-[40%] gap-4">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Start selling, fulfilling, and growing today!
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-normal">
                With FBX, cross-border e-commerce becomes simpler, faster, and more profitable.
              </p>
              <Button
                title="Try it Now"
                className="rounded-3xl w-[200px] bg-white hover:bg-white  text-[#A83E45] sm:w-[244px] my-3 h-[40px] sm:h-[50px]"
              />
            </div>
            <div className="w-full md:w-[50%] h-full">
              <Image src={Fulfil || "/placeholder.svg"} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

