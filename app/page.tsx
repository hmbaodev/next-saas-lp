import CallToAction from "@/section/CallToAction";
import Header from "@/section/Header";
import Hero from "@/section/Hero";
import LogoTicker from "@/section/LogoTicker";
import Pricing from "@/section/Pricing";
import ProductShowcase from "@/section/ProductShowcase";
import Testimonials from "@/section/Testimonials";
import Footer from "@/section/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
