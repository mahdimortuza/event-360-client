import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type TServiceProps = {
  image: string;
  heading: string;
  description: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
};

const ServiceCard = ({
  image,
  heading,
  description,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
}: TServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      // whileHover={{
      //   scale: 1.02,
      //   transition: { duration: 0.1 },
      // }}
      className={`w-[350px] lg:w-[412px] px-[25px] py-[36px] rounded-[6px] bg-gradient-to-b
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
       from-[#0000000D] to-white hover:bg-[#F5F6F7] hover:to-[#F5F6F7] relative transition-all duration-1000`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`h-auto w-full rounded-[6px] transition-all duration-1000 ${
          isHovered ? "hidden" : "block"
        }`}
        src={image}
      />
      <h2
        className={`text-black font-roboto text-[24px] font-semibold leading-[110%] transition-all duration-1000 ${
          isHovered ? "my-0" : "my-6"
        }`}
      >
        {heading}
      </h2>
      <h6
        className={`text-[16px] mt-3 font-roboto text-light-blue leading-[160%] transition-all duration-1000 ${
          isHovered ? "block" : "hidden"
        }`}
      >
        {description}
      </h6>

      {/* services features  */}
      <p
        className={`flex gap-[18px] transition-all duration-1000 ${
          isHovered ? "mt-5" : "mt-5"
        }`}
      >
        <Check className="text-[#6FCF97] text-[10px] bg-white rounded-full p-[5px] transition-all duration-1000" />
        <span className="text-black font-plusJakartaSans text-[18px] leading-[150%] transition-all duration-1000">
          {feature1}
        </span>
      </p>
      <p className="flex gap-[18px] mt-4 transition-all duration-1000">
        <Check className="text-[#6FCF97] text-[10px] bg-white rounded-full p-[5px] transition-all duration-1000" />
        <span className="text-black font-plusJakartaSans text-[18px] leading-[150%] transition-all duration-1000">
          {" "}
          {feature2}
        </span>
      </p>
      <p className="flex gap-[18px] mt-4 transition-all duration-1000">
        <Check className="text-[#6FCF97] text-[10px] bg-white rounded-full p-[5px] transition-all duration-1000" />
        <span className="text-black font-plusJakartaSans text-[18px] leading-[150%] transition-all duration-1000">
          {feature3}
        </span>
      </p>
      <p className="flex gap-[18px] mt-4 transition-all duration-1000">
        <Check className="text-[#6FCF97] text-[10px] bg-white rounded-full p-[5px] transition-all duration-1000" />
        <span className="text-black font-plusJakartaSans text-[18px] leading-[150%] transition-all duration-1000">
          {feature4}
        </span>
      </p>
      <p className="flex gap-[18px] mt-4 transition-all duration-1000">
        <Check className="text-[#6FCF97] text-[10px] bg-white rounded-full p-[5px] transition-all duration-1000" />
        <span className="text-black font-plusJakartaSans text-[18px] leading-[150%] transition-all duration-1000">
          {feature5}
        </span>
      </p>
      <Button
        className={`w-full mt-10 transition-all duration-1000 
      ${isHovered ? "block" : "hidden"}`}
      >
        Check it out
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
