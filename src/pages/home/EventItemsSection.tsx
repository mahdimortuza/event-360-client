import item5 from "@/assets/event-item-img/Rectangle 2989.png";
import item1 from "@/assets/event-item-img/item-1.jpeg";
import item2 from "@/assets/event-item-img/item-2.jpeg.jpeg";
import item3 from "@/assets/event-item-img/item-3.jpeg";
import item4 from "@/assets/event-item-img/item-4.jpeg";
import item6 from "@/assets/event-item-img/item-6.jpeg";
import Container from "@/components/Container";
import Heading from "@/components/heading/Heading";
import { motion } from "framer-motion";
const EventItemsSection = () => {
  return (
    <Container className="mt-[76px]">
      <Heading
        headText="Event Items"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[54px]">
        {/* grid-1  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="h-[253px] w-full p-4 bg-[#8682B0] bg-opacity-15 rounded-[6px] 
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]

      "
          >
            <img className="h-[188px] w-full  rounded-[6px]" src={item6} />
            <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
              Event Item - 6
            </h6>
          </motion.div>

          {/* grid-1 col-2  */}
          <div className="grid grid-cols-2 gap-5 mt-5">
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="h-[253px] p-4 bg-[#8682B0] bg-opacity-15 rounded-[6px] 
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
              "
            >
              <img className="h-[188px] w-full rounded-[6px]" src={item2} />
              <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
                Event Item - 6
              </h6>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="h-[253px] p-4 bg-[#8682B0] bg-opacity-15 rounded-[6px] 
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
              "
            >
              <img className="h-[188px] w-full rounded-[6px]" src={item3} />
              <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
                Event Item - 6
              </h6>
            </motion.div>
          </div>
        </div>

        {/* grid-2  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="h-[253px] p-4 bg-[#8682B0] bg-opacity-15 w-full rounded-[6px]
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
      "
          >
            <img className="h-[188px] w-full rounded-[6px]" src={item5} />
            <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
              Event Item - 6
            </h6>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="h-[253px] mt-5 p-4 bg-[#8682B0] bg-opacity-15 rounded-[6px] 
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
            "
          >
            <img className="h-[188px] w-full rounded-[6px]" src={item4} />
            <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
              Event Item - 6
            </h6>
          </motion.div>
        </div>

        {/* grid-3  */}
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="h-[525px] p-4 bg-[#8682B0] rounded-[6px] bg-opacity-15
          
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
      "
        >
          <img className="h-[460px] w-full rounded-[6px]" src={item1} />
          <h6 className="text-black mt-3 mb-4 font-roboto text-[20px] leading-[110%]">
            Event Item - 6
          </h6>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default EventItemsSection;
