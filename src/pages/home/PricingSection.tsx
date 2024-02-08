import Container from "@/components/Container";
import Heading from "@/components/heading/Heading";
import PricingCard from "@/components/pricingCard/PricingCard";

const PricingSection = () => {
  return (
    <Container className="mt-[76px]">
      <Heading
        headText="Explore our pricing plans"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[54px] max-w-[1086px] bg-white mx-auto">
        <PricingCard
          planTitle="Starter"
          price="$10"
          planeLink=""
          planDetail="Ut posuere felis arcu tellus tempus in in ultricies. Gravida."
          feature1="Free Custom Domain*"
          feature2="Unlimited Bandwith"
          feature3="Contributors"
          feature4="Basic Website Metrics"
          feature5="Squarespace Extension"
          feature6="Customer Support"
          feature7="Project Roles"
        />
        <PricingCard
          planTitle="Basic"
          price="$15"
          planeLink=""
          planDetail="Ut posuere felis arcu tellus tempus in in ultricies. Gravida."
          feature1="Free Custom Domain*"
          feature2="Unlimited Bandwith"
          feature3="Contributors"
          feature4="Basic Website Metrics"
          feature5="Squarespace Extension"
          feature6="Customer Support"
          feature7="Project Roles"
        />
        <PricingCard
          planTitle="Standard"
          price="$35"
          planeLink=""
          planDetail="Ut posuere felis arcu tellus tempus in in ultricies. Gravida."
          feature1="Free Custom Domain*"
          feature2="Unlimited Bandwith"
          feature3="Contributors"
          feature4="Basic Website Metrics"
          feature5="Squarespace Extension"
          feature6="Customer Support"
          feature7="Project Roles"
        />
        <PricingCard
          planTitle="Professional"
          price="$15"
          planeLink=""
          planDetail="Ut posuere felis arcu tellus tempus in in ultricies. Gravida."
          feature1="Free Custom Domain*"
          feature2="Unlimited Bandwith"
          feature3="Contributors"
          feature4="Basic Website Metrics"
          feature5="Squarespace Extension"
          feature6="Customer Support"
          feature7="Project Roles"
        />
      </div>
    </Container>
  );
};

export default PricingSection;
