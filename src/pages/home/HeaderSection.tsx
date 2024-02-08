import video from "@/assets/Images.png";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <Container className="mt-[33px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-[30px] lg:gap-[130px]">
        <div>
          <motion.h1
            initial={{ opacity: 0, marginBottom: 30 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ duration: 1 }}
            className="text-[35px] lg:text-[56px] font-bold leading-[110%] uppercase text-dark-blue"
          >
            Best Event management firm
          </motion.h1>
          <Button className="mt-[32px]">Explore</Button>
        </div>
        <motion.div
          initial={{ opacity: 0, marginBottom: -20 }}
          whileInView={{ opacity: 1, marginBottom: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-[20px] text-dark-blue font-roboto leading-[160%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, marginBottom: 20 }}
        animate={{ opacity: 1, marginBottom: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-auto w-full mt-12"
        src={video}
      ></motion.img>
    </Container>
  );
};

export default HeaderSection;
