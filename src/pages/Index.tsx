
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Icon name="Trees" className="h-8 w-8 text-green-600 mr-2" />
            <h1 className="text-2xl font-bold text-green-800">Лукоморье</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-green-600">О нас</a>
            <a href="#cabins" className="text-gray-700 hover:text-green-600">Домики</a>
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

      <main className="flex-grow">
        {/* Hero секция */}
        <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80')" }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">База отдыха <span className="text-green-400">Лукоморье</span></h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Отдохните от городской суеты в окружении живописной природы на берегу озера</p>
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

        {/* О базе отдыха */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Добро пожаловать в Лукоморье</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Уютная база отдыха, где вы можете насладиться природой, чистым воздухом и комфортным проживанием</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Home" className="mr-2 text-green-600" /> Комфортное размещение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Уютные домики различных категорий, оборудованные всем необходимым для комфортного отдыха</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Utensils" className="mr-2 text-green-600" /> Домашняя кухня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ресторан с разнообразным меню из свежих и экологически чистых продуктов</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mountain" className="mr-2 text-green-600" /> Активный отдых
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Разнообразные развлечения на воде и суше, походы, рыбалка и множество других активностей</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Наши домики */}
        <section id="cabins" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши домики</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Выберите комфортное жилье по вашему вкусу</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                     alt="Стандартный домик"
                     className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>Стандартный домик</CardTitle>
                  <CardDescription>От 4000₽ за ночь</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Уютный домик для отдыха на 2-4 человека с основными удобствами</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Подробнее</Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                     alt="Семейный домик"
                     className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>Семейный домик</CardTitle>
                  <CardDescription>От 6000₽ за ночь</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Просторный домик для семьи или компании из 4-6 человек с кухней и террасой</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Подробнее</Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                     alt="Люкс-коттедж"
                     className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>Люкс-коттедж</CardTitle>
                  <CardDescription>От 10000₽ за ночь</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Премиальный коттедж с сауной, камином и панорамными окнами с видом на озеро</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Подробнее</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA блок */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы отдохнуть в Лукоморье?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Забронируйте свой отдых прямо сейчас и получите скидку 10% на проживание от 3 дней</p>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Забронировать со скидкой
            </Button>
          </div>
        </section>
      </main>

      {/* Подвал сайта */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Icon name="Trees" className="h-6 w-6 mr-2" />
                Лукоморье
              </h3>
              <p className="text-gray-300">Лучшее место для отдыха вдали от городской суеты, среди красивой природы.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="flex items-center mb-2"><Icon name="MapPin" className="h-5 w-5 mr-2" /> г. Сказочный, ул. Лесная, 123</p>
              <p className="flex items-center mb-2"><Icon name="Phone" className="h-5 w-5 mr-2" /> +7 (123) 456-78-90</p>
              <p className="flex items-center mb-2"><Icon name="Mail" className="h-5 w-5 mr-2" /> info@lukomorye.ru</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Меню</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Главная</a></li>
                <li><a href="#about" className="hover:text-green-400">О нас</a></li>
                <li><a href="#cabins" className="hover:text-green-400">Домики</a></li>
                <li><a href="#activities" className="hover:text-green-400">Развлечения</a></li>
                <li><a href="#contacts" className="hover:text-green-400">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400"><Icon name="Facebook" className="h-6 w-6" /></a>
                <a href="#" className="hover:text-green-400"><Icon name="Instagram" className="h-6 w-6" /></a>
                <a href="#" className="hover:text-green-400"><Icon name="Twitter" className="h-6 w-6" /></a>
                <a href="#" className="hover:text-green-400"><Icon name="Youtube" className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 База отдыха "Лукоморье". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
