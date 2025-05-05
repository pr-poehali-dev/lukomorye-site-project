
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CottageCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const CottageCard = ({ image, title, price, description }: CottageCardProps) => {
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

const CottageSection = () => {
  const cottages = [
    {
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Коттедж 'Уютный'",
      price: "От 5000₽ за сутки",
      description: "Деревянный коттедж с двумя спальнями, гостиной, кухней и террасой с видом на озеро"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Коттедж 'Семейный'",
      price: "От 7000₽ за сутки",
      description: "Просторный коттедж с тремя спальнями, гостиной, камином, кухней и большой верандой"
    },
    {
      image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Домик 'Рыбацкий'",
      price: "От 3000₽ за сутки",
      description: "Компактный домик для 2-4 человек, идеально подходит для любителей рыбалки и отдыха на природе"
    }
  ];

  return (
    <section id="cottages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши коттеджи</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Комфортные деревянные коттеджи для отдыха на берегу озера Велье</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cottages.map((cottage, index) => (
            <CottageCard 
              key={index}
              image={cottage.image}
              title={cottage.title}
              price={cottage.price}
              description={cottage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CottageSection;
