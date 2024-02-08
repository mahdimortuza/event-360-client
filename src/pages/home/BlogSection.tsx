import writerImg from "@/assets/blogs-image/author-image/Invisible.png";
import img1 from "@/assets/blogs-image/post-image/img-1.png";
import img2 from "@/assets/blogs-image/post-image/img-2.png";
import img3 from "@/assets/blogs-image/post-image/img-3.png";
import img4 from "@/assets/blogs-image/post-image/img-4.jpeg";
import img5 from "@/assets/blogs-image/post-image/img-5.png";
import img6 from "@/assets/blogs-image/post-image/img-6.jpeg";
import Container from "@/components/Container";
import BlogsCard from "@/components/blogsCard/BlogsCard";
import Heading from "@/components/heading/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BlogSection = () => {
  return (
    <Container className="mt-[76px]">
      <Heading
        headText="Our blogs"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className=" mt-[54px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img1}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img2}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img3}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img4}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img5}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/4">
              <BlogsCard
                blogImg={img6}
                writerImg={writerImg}
                writerName="Andre Sina"
                writerDesignation="Professor PH University"
                blogTitle="Who are we and why we're here."
                date="25-7/2032"
                link="#"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default BlogSection;
