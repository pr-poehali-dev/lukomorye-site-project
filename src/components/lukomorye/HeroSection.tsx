
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  highlightedText: string;
  subtitle: string;
}

const HeroSection = ({ 
  backgroundImage, 
  title, 
  highlightedText, 
  subtitle 
}: HeroSectionProps) => {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title} <span className="text-green-400">{highlightedText}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Забронировать сейчас
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
