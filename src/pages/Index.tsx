import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FreeQuoteBanner from "@/components/FreeQuoteBanner";
import DetailedServices from "@/components/DetailedServices";
import RecentWork from "@/components/RecentWork";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FreeQuoteBanner />
        <DetailedServices />
        <RecentWork />
        <Team />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
