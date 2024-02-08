import image from "@/assets/upcomming-event-imge/Photo.png";
import Container from "@/components/Container";
import HeadingSecondary from "@/components/headingSecondary/HeadingSecondary";
import { motion } from "framer-motion";
import { Cpu, Layers } from "lucide-react";

const UpComingEventsSection = () => {
  return (
    <Container className="mt-[76px] grid grid-cols-1 lg:grid-cols-2 gap-[92px] place-items-center ">
      <div className="">
        <HeadingSecondary
          headText="Upcoming Events"
          headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. 
        Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.
         Ultrices faucibus neque velit risus ac id lorem."
        />
        <motion.div
          initial={{ marginLeft: -80 }}
          animate={{ marginLeft: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#FFF9EE] mt-12  rounded-[16px]"
        >
          <motion.div
            // initial={{ marginBottom: -10 }}
            // animate={{ marginBottom: 0 }}
            // transition={{ duration: 1, delay: 0.5 }}
            className="p-8"
          >
            <Layers />
            <h3>Golf Clubbers Annual Agenda</h3>
            <p>
              Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
              tortor in tellus dictum pellentesque.
            </p>
          </motion.div>
          <motion.div
            // initial={{ marginBottom: -10 }}
            // animate={{ marginBottom: 0 }}
            // transition={{ duration: 1, delay: 0.5 }}
            className="p-8"
          >
            <Cpu />
            <h3>Music Events at LA</h3>
            <p>
              Vivamus dignissim tortor in tellus dictum pellentesque. Praesent
              mauris metus, dictum quis velit non.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        initial={{ marginLeft: 80 }}
        animate={{ marginLeft: 0 }}
        transition={{ duration: 1 }}
        src={image}
        className=" h-full w-full"
      />
    </Container>
  );
};

export default UpComingEventsSection;
