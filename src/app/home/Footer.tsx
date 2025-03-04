import IG from "@/assets/images/Instagram.png";
import FaceBook from "@/assets/images/Facebook.png";
import Linkedin from "@/assets/images/LinkedIn.png";
import Youtube from "@/assets/images/Youtube.png";
import Image from "next/image";
import FBX from "@/assets/images/FbxLogo.png";

const socials = [
  {
    id: 1,
    imgUrl: IG,
    link: "https://www.instagram.com/fulfillmentbyx?igsh=MW5penRid2RhZjJuMg==",
  },
  {
    id: 2,
    imgUrl: FaceBook,
    link: "https://www.facebook.com/profile.php?id=61562453098891&mibextid=ZbWKwL",
  },
  {
    id: 3,
    imgUrl: Linkedin,
    link: "https://www.linkedin.com/company/fufillmentbyx/",
  },
  {
    id: 4,
    imgUrl: Youtube,
    link: "https://www.threads.net/@fulfillmentbyx",
  },
];

export const Footer = () => {
  return (
    <div id="footer" className="px-5 py-10 md:px-16 md:py-20 w-full h-auto bg-white">
      <div className="flex flex-col md:flex-row w-full justify-between gap-10">
        <div className="flex flex-col gap-5">
          <Image
            alt="fbx-logo"
            src={FBX}
            className="w-[60px] h-[28px] md:w-[80px] md:h-[40px] mt-5"
          />
          <p className="text-lg md:text-xl font-medium">
            Fulfilling all your needs
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 cursor-pointer bg-[#424242] rounded-full flex items-center justify-center">
                  <Image
                    src={social.imgUrl}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </a>
            ))}
          </div>
          <hr className="border block md:hidden invert border-black my-8 md:my-11" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 pb-10 justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold">Products</h3>
            <p>Storehouse</p>
            <p>Fulfilment</p>
            <p>Payment</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold">Contacts</h3>
            <p>Accra, Ghana</p>
            <a
              href="mailto:support@fulfillmentbyx.com"
              className="hover:text-red-600"
            >
              support@fulfillmentbyx.com
            </a>
            <p>0539376774</p>
          </div>
        </div>
      </div>

      <hr className="border border-black my-8 md:my-11 md:block hidden" />

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>

        <div className="text-center md:text-left">
          © 2025 FBX. All rights reserved. Designed and built by FBX.
        </div>
      </div>

      {/* WhatsApp Floating Widget */}
      <a
        href="https://wa.me/+233539376774?text=Hello%20I%20need%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={30}
            height={30}
          />
        </div>
      </a>
    </div>
  );
};

