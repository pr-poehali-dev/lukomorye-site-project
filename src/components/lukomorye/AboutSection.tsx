
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
      title: "Комфортное размещение",
      description: "Уютные домики различных категорий, оборудованные всем необходимым для комфортного отдыха"
    },
    {
      icon: "Utensils",
      title: "Домашняя кухня",
      description: "Ресторан с разнообразным меню из свежих и экологически чистых продуктов"
    },
    {
      icon: "Mountain",
      title: "Активный отдых",
      description: "Разнообразные развлечения на воде и суше, походы, рыбалка и множество других активностей"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Добро пожаловать в Лукоморье</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Уютная база отдыха, где вы можете насладиться природой, чистым воздухом и комфортным проживанием</p>
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
