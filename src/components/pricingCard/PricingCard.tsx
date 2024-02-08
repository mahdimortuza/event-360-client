import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type TPricingProps = {
  planTitle: string;
  price: string;
  planeLink: string;
  planDetail: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  feature6: string;
  feature7: string;
};

const PricingCard = ({
  planTitle,
  price,
  planeLink,
  planDetail,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
}: TPricingProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="w-[300px] 
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
      mx-auto lg:w-[240px] pt-12 pb-8 shadow-[-9px_7px_52px_0px_rgba(0,0,0,0.09)]"
    >
      <h1 className=" font-inter text-center text-[20px] text-black font-bold">
        {planTitle}
      </h1>
      <h2 className=" text-blue text-center font-inter text-[25px] font-semibold">
        {price}
      </h2>
      <Link
        to={planeLink}
        className="flex items-center justify-center mt-[22px]"
      >
        <Button className="py-[7px] px-10 lg:px-6 rounded-[5px] font-inter">
          Get this package
        </Button>
      </Link>
      <p className="mt-[22px] text-center text-light-blue font-inter text-[12px] font-normal leading-[130%] max-w-[26ch] mx-auto">
        {planDetail}
      </p>
      <h5 className="text-center mt-[22px] bg-[#E8E8E8]">
        <span className=" text-black font-inter text-[12px] leading-[130%]">
          All features options
        </span>
      </h5>
      <h6 className="mt-[22px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-blue text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature1}
        </span>
      </h6>
      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-blue text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature2}
        </span>
      </h6>
      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-blue text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature3}
        </span>
      </h6>
      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-blue text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature4}
        </span>
      </h6>
      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-[#FFB6D9] text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature5}
        </span>
      </h6>
      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <Check className="text-[6px] p-[5px] bg-[#FFB6D9] text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature6}
        </span>
      </h6>

      <h6 className="mt-[16px] flex gap-[6px] items-center ml-12 lg:ml-10">
        <X className="text-[6px] p-[5px] bg-[#FFB6D9] text-white rounded-full " />
        <span className="text-[#454545] font-inter text-[11px] font-normal">
          {feature7}
        </span>
      </h6>
    </motion.div>
  );
};

export default PricingCard;
