
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface GazeboCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const GazeboCard = ({ image, title, price, description }: GazeboCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="h-48 w-full object-cover" 
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

const GazeboSection = () => {
  const gazebos = [
    {
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Стандартная беседка",
      price: "От 2000₽ за день",
      description: "Уютная беседка на 8-10 человек с мангалом и столом для пикника"
    },
    {
      image: "https://images.unsplash.com/photo-1624564300034-4e7c58eb17d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Семейная беседка",
      price: "От 3500₽ за день",
      description: "Просторная беседка для компании из 12-15 человек с мангалом, казаном и игровой зоной"
    },
    {
      image: "https://images.unsplash.com/photo-1624313976899-0fd4989a2fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "VIP-беседка",
      price: "От 6000₽ за день",
      description: "Премиальная беседка с панорамным видом на озеро, барбекю-зоной и собственной купальней"
    }
  ];

  return (
    <section id="gazebos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши беседки</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Выберите комфортное место для отдыха на природе</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gazebos.map((gazebo, index) => (
            <GazeboCard 
              key={index}
              image={gazebo.image}
              title={gazebo.title}
              price={gazebo.price}
              description={gazebo.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GazeboSection;
