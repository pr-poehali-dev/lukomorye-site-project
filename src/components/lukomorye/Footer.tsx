
import Icon from "@/components/ui/icon";

interface SocialLinkProps {
  name: string;
}

const SocialLink = ({ name }: SocialLinkProps) => {
  return (
    <a href="#" className="hover:text-green-400">
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
    { href: "#gazebos", label: "Беседки" },
    { href: "#bathhouse", label: "Баня" },
    { href: "#activities", label: "Развлечения" },
    { href: "#contacts", label: "Контакты" }
  ];

  const contactInfo = [
    { icon: "MapPin", text: "г. Сказочный, ул. Лесная, 123" },
    { icon: "Phone", text: "+7 (123) 456-78-90" },
    { icon: "Mail", text: "info@lukomorye.ru" }
  ];

  const socialLinks = ["Facebook", "Instagram", "Twitter", "Youtube"];

  return (
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
                <SocialLink key={index} name={link} />
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
