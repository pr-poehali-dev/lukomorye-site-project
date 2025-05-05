
import Icon from "@/components/ui/icon";

interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink = ({ name, url }: SocialLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
      <Icon name={name} className="h-6 w-6" />
    </a>
  );
};

interface FooterNavLinkProps {
  href: string;
  label: string;
}

const FooterNavLink = ({ href, label }: FooterNavLinkProps) => {
  return (
    <li>
      <a href={href} className="hover:text-green-400">{label}</a>
    </li>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <p className="flex items-center mb-2">
      <Icon name={icon} className="h-5 w-5 mr-2" /> {text}
    </p>
  );
};

const Footer = () => {
  const navLinks = [
    { href: "#", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#cottages", label: "Коттеджи" },
    { href: "#bathhouse", label: "Банный комплекс" },
    { href: "#activities", label: "Развлечения" },
    { href: "#contacts", label: "Контакты" }
  ];

  const contactInfo = [
    { icon: "MapPin", text: "Псковская обл., д. Заозерье, оз. Велье" },
    { icon: "Phone", text: "+7 (921) 210-80-55" },
    { icon: "Mail", text: "lukorel@mail.ru" }
  ];

  const socialLinks = [
    { name: "MessageCircle", url: "https://vk.com/lukorel" },
    { name: "Mail", url: "#" },
    { name: "Image", url: "#" }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Leaf" className="h-6 w-6 mr-2" />
              Лукоморье
            </h3>
            <p className="text-gray-300">База отдыха в Псковской области на берегу озера Велье. Идеальное место для отдыха от городской суеты.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            {contactInfo.map((item, index) => (
              <ContactItem key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Меню</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <FooterNavLink key={index} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} name={link.name} url={link.url} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 База отдыха "Лукоморье". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
