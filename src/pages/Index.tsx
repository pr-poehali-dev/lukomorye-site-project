
import AboutSection from "@/components/lukomorye/AboutSection";
import ActivitiesSection from "@/components/lukomorye/ActivitiesSection";
import BathhouseSection from "@/components/lukomorye/BathhouseSection";
import ContactSection from "@/components/lukomorye/ContactSection";
import CottageSection from "@/components/lukomorye/CottageSection";
import CtaSection from "@/components/lukomorye/CtaSection";
import Footer from "@/components/lukomorye/Footer";
import Header from "@/components/lukomorye/Header";
import HeroSection from "@/components/lukomorye/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection 
          backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
          title="База отдыха"
          highlightedText="Лукоморье"
          subtitle="Уютный уголок природы на берегу озера Велье в Псковской области"
        />

        <AboutSection />
        
        <CottageSection />
        
        <BathhouseSection />
        
        <ActivitiesSection />
        
        <ContactSection />

        <CtaSection 
          title="Готовы отдохнуть в Лукоморье?"
          description="Забронируйте коттедж на берегу озера прямо сейчас и получите скидку 10% на проживание от 5 дней"
          buttonText="Забронировать со скидкой"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
