
import AboutSection from "@/components/lukomorye/AboutSection";
import BathhouseSection from "@/components/lukomorye/BathhouseSection";
import CtaSection from "@/components/lukomorye/CtaSection";
import Footer from "@/components/lukomorye/Footer";
import GazeboSection from "@/components/lukomorye/GazeboSection";
import Header from "@/components/lukomorye/Header";
import HeroSection from "@/components/lukomorye/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection 
          backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
          title="База отдыха"
          highlightedText="Лукоморье"
          subtitle="Отдохните от городской суеты в окружении живописной природы на берегу озера"
        />

        <AboutSection />
        
        <GazeboSection />
        
        <BathhouseSection />

        <CtaSection 
          title="Готовы отдохнуть в Лукоморье?"
          description="Забронируйте свой отдых прямо сейчас и получите скидку 10% на проживание от 3 дней"
          buttonText="Забронировать со скидкой"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
