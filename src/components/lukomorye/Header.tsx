
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Icon name="Trees" className="h-8 w-8 text-green-600 mr-2" />
          <h1 className="text-2xl font-bold text-green-800">Лукоморье</h1>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-green-600">Главная</a>
          <a href="#about" className="text-gray-700 hover:text-green-600">О нас</a>
          <a href="#gazebos" className="text-gray-700 hover:text-green-600">Беседки</a>
          <a href="#bathhouse" className="text-gray-700 hover:text-green-600">Баня</a>
          <a href="#activities" className="text-gray-700 hover:text-green-600">Развлечения</a>
          <a href="#contacts" className="text-gray-700 hover:text-green-600">Контакты</a>
        </nav>
        
        <Button className="hidden md:flex bg-green-600 hover:bg-green-700">
          Забронировать
        </Button>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
