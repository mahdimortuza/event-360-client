import { useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/Container";
import Heading from "@/components/heading/Heading";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import { Progress } from "@radix-ui/react-progress";
import { useEffect, useState } from "react";

const OurServicesSection = () => {
  // for handling progress bar
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 100);
    return () => clearTimeout(timer);
  }, []);

  // loading data using tanstack query
  const { data: services, isError, isLoading } = useGetServices();

  // limiting data on the front page
  // const limit = 3;
  // const services = data.slice(0, limit);

  if (isLoading) {
    return (
      <Progress value={progress} className="w-[350px] mx-auto mt-[20px]" />
    );
  }
  if (isError) {
    return <h1>Please try again :)</h1>;
  }

  return (
    <Container className=" mt-[76px]">
      <Heading
        headText="Our Services"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.
        Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="mt-[54px] grid  grid-cols-1 lg:grid-cols-3 gap-5">
        {services?.map(
          (service: {
            img: string;
            title: string;
            feature1: string;
            feature2: string;
            feature3: string;
            feature4: string;
            feature5: string;
          }) => (
            <ServiceCard
              image={service.img}
              heading={service.title}
              description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies."
              feature1={service.feature1}
              feature2={service.feature2}
              feature3={service.feature3}
              feature4={service.feature4}
              feature5={service.feature5}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default OurServicesSection;
