
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const CtaSection = ({ title, description, buttonText }: CtaSectionProps) => {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
