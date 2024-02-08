import img1 from "@/assets/user-review-image/company-logo/img-1.svg";
import img2 from "@/assets/user-review-image/company-logo/img-2.svg";
import img3 from "@/assets/user-review-image/company-logo/img-3.svg";
import profilePic from "@/assets/user-review-image/profile-image/Invisible.png";
import Container from "@/components/Container";
import HeadingSecondary from "@/components/headingSecondary/HeadingSecondary";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewSection = () => {
  return (
    <Container className="mt-[116px]">
      <HeadingSecondary
        headText="What client says"
        headingDescription="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra."
      />

      {/*  */}

      <div className="mt-[70px] mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="  md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="Netflix"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img1}
                className="bg-[#FFF9EE]"
              />
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="Google"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img2}
                className="bg-[#E7F5E8]"
              />
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="YouTube"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img3}
                className="bg-[#F5F6F7]"
              />
            </CarouselItem>

            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="Netflix"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img1}
                className="bg-[#FFF9EE]"
              />
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="Google"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img2}
                className="bg-[#E7F5E8]"
              />
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <ReviewCard
                profileImg={profilePic}
                userName="Annette Black"
                designation="Chief Chairman of"
                companyName="YouTube"
                reviewText="“Golio is one of the BEST web designers I've ever worked with professionally. 
        I am a repeat customer who continues to work with Zakir because of his talent/skills, great 
        customer service, work ethic, and attention to detail. ”"
                companyLogo={img3}
                className="bg-[#F5F6F7]"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="">
            <CarouselPrevious className={` `} />
            <CarouselNext className={``} />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default ReviewSection;
