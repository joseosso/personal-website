import { IconType } from "react-icons";

interface ButtonSocialMediaProps {
  icon: IconType;
  href: string;
}

const ButtonSocialMedia = ({ icon: Icon, href }: ButtonSocialMediaProps) => {
  return (
    <a href={href} target="_blank">
      <Icon />
    </a>
  );
};

export default ButtonSocialMedia;
