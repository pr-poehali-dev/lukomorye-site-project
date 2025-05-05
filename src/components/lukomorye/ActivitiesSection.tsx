
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
}

const ActivityCard = ({ icon, title, description }: ActivityCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <Icon name={icon} className="mr-2 text-green-600 h-5 w-5" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      icon: "Fish",
      title: "Рыбалка",
      description: "Озеро Велье богато рыбой: щука, окунь, лещ, плотва и другие виды"
    },
    {
      icon: "Sailboat",
      title: "Лодки и катамараны",
      description: "Прокат лодок и катамаранов для прогулок по озеру"
    },
    {
      icon: "Utensils",
      title: "Барбекю-зоны",
      description: "Оборудованные зоны для приготовления барбекю и шашлыка"
    },
    {
      icon: "Table2",
      title: "Настольный теннис",
      description: "Столы для настольного тенниса под навесом"
    },
    {
      icon: "Footprints",
      title: "Пешие прогулки",
      description: "Живописные маршруты для прогулок по лесу вокруг базы"
    },
    {
      icon: "Volleyball",
      title: "Волейбол",
      description: "Площадка для пляжного волейбола на берегу озера"
    },
    {
      icon: "Bath",
      title: "Пляж",
      description: "Благоустроенный пляж с пологим входом в воду"
    },
    {
      icon: "Gamepad2",
      title: "Настольные игры",
      description: "Большая коллекция настольных игр для вечернего досуга"
    }
  ];

  return (
    <section id="activities" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Развлечения и активности</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Разнообразный активный отдых для всей семьи на природе</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index} 
              icon={activity.icon} 
              title={activity.title} 
              description={activity.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
