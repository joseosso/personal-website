import { IconType } from "react-icons";

interface ButtonSocialMediaProps {
  icon: IconType;
  href: string;
}

const ButtonSocialMedia = ({ icon: Icon, href }: ButtonSocialMediaProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-14 h-14 flex items-center justify-center border border-gray-500/30 rounded-lg text-gray-400 hover:text-white 
      transition-colors duration-300 hover:bg-gray-500/10 mr-5"
    >
      <Icon size={22} />
    </a>
  );
};

export default ButtonSocialMedia;
