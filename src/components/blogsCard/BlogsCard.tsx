import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type TBlogProps = {
  blogImg: string;
  writerImg: string;
  writerName: string;
  writerDesignation: string;
  blogTitle: string;
  date: string;
  link: string;
};
const BlogsCard = ({
  blogImg,
  writerImg,
  writerName,
  writerDesignation,
  blogTitle,
  date,
  link,
}: TBlogProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="border-2 rounded-md w-[300px] font-inter mx-auto"
    >
      <img className="h-[200px] w-full" src={blogImg} />
      <div className="px-2">
        <div className="mt-2 flex gap-4  items-center">
          <img className="w-[40px] h-full" src={writerImg} />
          <div>
            <h3 className="text-[16px] font-semibold text-dark-blue">
              {writerName}
            </h3>
            <h6 className=" text-light-blue text-[14px]">
              {writerDesignation}
            </h6>
          </div>
        </div>

        <div className="flex justify-between items-end mt-4 pb-2">
          <div>
            <h1 className="text-[20px] font-semibold text-dark-blue">
              {blogTitle}
            </h1>
            <p className="text-light-blue text-[12px]">{date}</p>
          </div>
          <Link to={link}>
            <Button className="rounded-md px-5 py-[4px] text-[15px]">
              View
            </Button>
          </Link>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsCard;
