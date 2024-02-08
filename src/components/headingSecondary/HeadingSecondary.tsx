type THeadingProps = {
  headText: string;
  headingDescription: string;
};
import { motion } from "framer-motion";

const HeadingSecondary = ({ headText, headingDescription }: THeadingProps) => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, marginTop: 15 }}
        whileInView={{ opacity: 1, marginTop: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-dark-blue font-roboto text-[48px] font-extrabold leading-[110%]"
      >
        {headText}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, marginTop: 15 }}
        whileInView={{ opacity: 1, marginTop: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-light-blue text-[18px] font-roboto font-normal leading-[160%] max-w-[55ch]"
      >
        {headingDescription}
      </motion.p>
    </div>
  );
};

export default HeadingSecondary;
