import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-display bg-[#f6f7f8] dark:bg-[#0a0d12] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCategories />
        <ServicesSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
