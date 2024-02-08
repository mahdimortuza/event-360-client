import img2 from "@/assets/gallery-image/Picture (1).png";
import img11 from "@/assets/gallery-image/Picture (10).png";
import img12 from "@/assets/gallery-image/Picture (11).png";
import img3 from "@/assets/gallery-image/Picture (2).png";
import img4 from "@/assets/gallery-image/Picture (3).png";
import img5 from "@/assets/gallery-image/Picture (4).png";
import img6 from "@/assets/gallery-image/Picture (5).png";
import img7 from "@/assets/gallery-image/Picture (6).png";
import img8 from "@/assets/gallery-image/Picture (7).png";
import img9 from "@/assets/gallery-image/Picture (8).png";
import img10 from "@/assets/gallery-image/Picture (9).png";
import img1 from "@/assets/gallery-image/Picture.png";
import Container from "@/components/Container";
import Heading from "@/components/heading/Heading";
import { motion } from "framer-motion";
const GallerySection = () => {
  return (
    <Container className="mt-[76px]">
      <Heading
        headText="Gallery"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="mt-[78px] max-w-[1086px] mx-auto grid grid-cols-2 lg:grid-cols-7 place-items-center">
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img1} />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img2} />
          </motion.div>
        </div>

        {/* row 2  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img3} />
          </motion.div>
        </div>

        {/* raw -3 */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img4} />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img5} />
          </motion.div>
        </div>

        {/* raw-4  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img6} />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img7} />
          </motion.div>
        </div>

        {/* raw -5  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img8} />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img9} />
          </motion.div>
        </div>

        {/* raw - 6  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img10} />
          </motion.div>
        </div>

        {/* taw - 7  */}
        <div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img11} />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <img src={img12} />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default GallerySection;
