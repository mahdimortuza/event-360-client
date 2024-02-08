import { useGetRecentEvents } from "@/api/admin/recentEvent/recentEvent.hook";

import Container from "@/components/Container";
import HeadingSecondary from "@/components/headingSecondary/HeadingSecondary";
import { Button } from "@/components/ui/button";
import { Progress } from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { Key, useEffect, useState } from "react";

const RecentEventSection = () => {
  // for handling progress bar
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 100);
    return () => clearTimeout(timer);
  }, []);

  // loading data using tanstack query
  const { data: recentEvents, isError, isLoading } = useGetRecentEvents();

  // limiting data on the front page
  // const limit = 6;
  // const recentEvents = data.slice(0, limit);

  if (isLoading) {
    return (
      <Progress value={progress} className="w-[380px] mx-auto mt-[10px]" />
    );
  }
  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <Container className="mt-[76px] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-[100px]">
      <div>
        <HeadingSecondary
          headText="Recent Events"
          headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />
        <Button className="mt-12">Learn more</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
        {recentEvents.map(
          (event: { _id: Key | null | undefined; img: string | undefined }) => (
            <motion.img
              key={event._id}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              src={event.img}
              className="w-[180px] h-[180px] rounded-[26px] recent-event-item"
            />
          )
        )}

        {/* <motion.img
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          src={img3}
          className="w-[180px] h-[180px] rounded-full"
        /> */}
      </div>
    </Container>
  );
};

export default RecentEventSection;
