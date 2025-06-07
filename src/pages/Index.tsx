
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SearchSection />
      <OpportunitiesSection />
      <WhyChooseSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
