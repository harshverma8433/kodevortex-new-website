import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyLearnSection from '@/components/WhyLearnSection';
import CourseCategories from '@/components/CourseCategories';
import PopularCourses from '@/components/PopularCourses';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import CTASection from "@/components/CTASection";
import PartnersSection from '@/components/PartnersSection';
import EducatorsSection from '@/components/EducatorsSection';
import BlogSection from '@/components/BlogSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar/>
      <HeroSection />
      <WhyLearnSection />
      <CourseCategories />
      <CTASection/>
      <PartnersSection/>
      <PopularCourses />
      <section id="educators" className="scroll-animate">
          <EducatorsSection />
      </section>
      <BlogSection/>
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
