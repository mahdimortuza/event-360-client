import img1 from "@/assets/brand-logo/img-1.svg";
import img2 from "@/assets/brand-logo/img-2.svg";
import img3 from "@/assets/brand-logo/img-3.svg";
import img4 from "@/assets/brand-logo/img-4.svg";
import img5 from "@/assets/brand-logo/img-5.svg";
import img6 from "@/assets/brand-logo/img-6.svg";
import Container from "@/components/Container";
import Marquee from "react-fast-marquee";

const SatisfiedCustomerSection = () => {
  return (
    <Container className="mt-[96px] font-inter tex-[20px] leading-[160%] font-normal">
      <h1 className=" text-dark-blue text-center">
        We have <span className="text-blue font-semibold">23k+</span> Satisfied
        & Trusted Customers
      </h1>

      {/* trusted brand logos  */}
      <Marquee speed={30}>
        <div className="mt-6 grid grid-cols-3 lg:grid-cols-6 gap-[30px] lg:gap-[120px]">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
      </Marquee>
    </Container>
  );
};

export default SatisfiedCustomerSection;
