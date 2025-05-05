
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name={icon} className="mr-2 text-green-600" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: "Home",
      title: "Уютные коттеджи",
      description: "Деревянные коттеджи и летние домики различных категорий на берегу озера с потрясающим видом"
    },
    {
      icon: "Flame",
      title: "Отдых с комфортом",
      description: "Все условия для комфортного отдыха: полностью оборудованные кухни, мангалы, беседки, парковка"
    },
    {
      icon: "Mountain",
      title: "Активный отдых",
      description: "Рыбалка, купание, прогулки по лесу, катание на лодках, настольный теннис и спортивные площадки"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">База отдыха в Псковской области</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Лукоморье — уютный уголок природы на берегу озера Велье, где вы можете отдохнуть от городской суеты всей семьей или компанией друзей</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
