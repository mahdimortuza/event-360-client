import BlogSection from "./BlogSection";
import EventItemsSection from "./EventItemsSection";
import FAQSection from "./FAQSection";
import GallerySection from "./GallerySection";
import HeaderSection from "./HeaderSection";
import OurServicesSection from "./OurServicesSection";
import PricingSection from "./PricingSection";
import RecentEventSection from "./RecentEventSection";
import ReviewSection from "./ReviewSection";
import SatisfiedCustomerSection from "./SatisfiedCustomerSection";
import UpComingEventsSection from "./UpComingEventsSection";

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <OurServicesSection />
      <EventItemsSection />
      <PricingSection />
      <GallerySection />
      <RecentEventSection />
      <UpComingEventsSection />
      <SatisfiedCustomerSection />
      <ReviewSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default Home;
