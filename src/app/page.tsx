import Hero from "@/components/Hero";
import Navbar from "./../components/Navbar";
import ServicesSection from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ProcessSection from "@/components/ProcessSection";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutUs />

      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <IndustriesWeServe />

      <ProcessSection />
      <ContactUs />
      <FAQ />
      <Footer />
    </div>
  );
}
