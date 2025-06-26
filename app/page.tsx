import FAQSection from "./_components/Home/FAQSection";
import FeatureSection from "./_components/Home/FeatureSection";
import Footer from "./_components/Home/Footer";
import HeroSection from "./_components/Home/HeroSection";
import { Navbar } from "./_components/Home/Navbar";
import Subscribe from "./_components/Home/Subscribe";

function page() {
  return (
    <div className="max-w-[90rem] mx-auto pt-10 px-6 sm:px-6 space-y-5 lg:px-8">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FAQSection />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
