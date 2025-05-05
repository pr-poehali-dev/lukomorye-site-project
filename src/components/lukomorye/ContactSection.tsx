
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start mb-4">
      <div className="bg-green-100 rounded-full p-3 mr-4">
        <Icon name={icon} className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Забронируйте домик или задайте вопрос о проживании и услугах</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">Имя</label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">Телефон</label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Сообщение</label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <ContactInfoItem 
              icon="MapPin" 
              title="Наш адрес"
              content={
                <>
                  <p>Псковская область, Пустошкинский район,</p>
                  <p>деревня Заозерье, озеро Велье</p>
                </>
              }
            />
            
            <ContactInfoItem 
              icon="Phone" 
              title="Телефон"
              content={
                <>
                  <p>+7 (921) 210-80-55</p>
                  <p>+7 (911) 351-73-98</p>
                </>
              }
            />
            
            <ContactInfoItem 
              icon="Mail" 
              title="Email"
              content="lukorel@mail.ru"
            />
            
            <ContactInfoItem 
              icon="Clock" 
              title="Время работы"
              content="Круглосуточно, без выходных"
            />
            
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-3">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="https://vk.com/lukorel" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
                <a href="#" className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3">
                  <Icon name="Mail" className="h-5 w-5" />
                </a>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3">
                  <Icon name="Image" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
