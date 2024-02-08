import { ArrowRight, Euro, Globe, PersonStanding } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-[#334155] mt-[54px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-6 py-12">
          <NavLink className="mt-0 md:-mt-2" to="#">
            <span className="text-[32px] text-white font-bold font-roboto">
              Event <span className="text-[#0B63E5]">360</span>
            </span>
          </NavLink>

          <div className="">
            <h3 className="text-white font-roboto text-[16px] font-medium">
              Product
            </h3>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Pricing
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Overview
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Browse
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Accessibility
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <h3 className="text-white font-roboto text-[16px] font-medium">
              Solutions
            </h3>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Brainstorming
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Ideation
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Wireframing
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Research
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <h3 className="text-white font-roboto text-[16px] font-medium">
              Resources
            </h3>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Help Center
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Blog
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Tutorials
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              FAQs
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <h3 className="text-white font-roboto text-[16px] font-medium">
              Support
            </h3>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Contact Us
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Developers
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Documentation
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Integrations
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <h3 className="text-white font-roboto text-[16px] font-medium">
              Company
            </h3>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              About
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Press
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px]">
              Events
            </p>
            <p className="text-[#E2E8F0] font-roboto text-[16px] leading-[140%] mt-[12px] flex gap-2">
              <span> Request Demo</span>
              <span>
                <ArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className=" bg-dark-blue w-full h-[1px]" />

        {/* footer foot  */}
        <div className="py-[24px] text-[#E2E8F0] text-[16px] font-roboto leading-[140%] flex justify-between">
          <h6 className="">@ 2023. All rights reserved.</h6>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[16px]">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact</p>
            <p className="flex gap-2">
              <Globe />
              <span>EN</span>
            </p>
            <p className="flex gap-2">
              <Euro />
              <span>EUR</span>
            </p>
            <PersonStanding className="border-2 rounded-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
