
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BathhouseFeatureProps {
  text: string;
}

const BathhouseFeature = ({ text }: BathhouseFeatureProps) => {
  return (
    <div className="flex items-start">
      <Icon name="Check" className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
      <p>{text}</p>
    </div>
  );
};

interface InfoItemProps {
  icon: string;
  text: string;
}

const InfoItem = ({ icon, text }: InfoItemProps) => {
  return (
    <div className="flex items-center mb-2">
      <Icon name={icon} className="h-5 w-5 text-green-600 mr-2" />
      <p className="font-medium">{text}</p>
    </div>
  );
};

const BathhouseSection = () => {
  const features = [
    "Русская баня на дровах с парной и комнатой отдыха",
    "Финская сауна с душевыми и зоной релакса",
    "Купель с холодной водой для контрастного купания",
    "Просторная терраса с выходом к озеру",
    "Услуги массажиста по предварительному заказу"
  ];

  return (
    <section id="bathhouse" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Банный комплекс</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Насладитесь отдыхом в традиционной русской бане или финской сауне на берегу озера</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Банный комплекс"
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Наш банный комплекс включает:</h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <BathhouseFeature key={index} text={feature} />
              ))}
            </div>
            
            <div className="pt-4">
              <InfoItem 
                icon="Clock" 
                text="График работы: ежедневно с 12:00 до 23:00" 
              />
              <InfoItem 
                icon="Coins" 
                text="Стоимость: от 3000₽ за 2 часа (до 6 человек)" 
              />
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 mt-4">
              Забронировать баню
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BathhouseSection;
