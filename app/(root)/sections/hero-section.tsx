import ButtonSocialMedia from "@/components/ui/button-social-media";
import Image from "next/image";
import { socialMedia } from "@/assets/data";
import Section from "@/components/ui/section";

const HeroSection = () => {
  return (
    <Section id="home">
      <div className="space-y-8">
        <div className="relative w-24 h-24 mb-10">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl text-white mb-5">{`Hey, I'm José — A Software Engineer currently researching Quantum Software Engineering`}</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nemo
            sed necessitatibus quae maxime eaque architecto quis eligendi!
            Doloribus pariatur, eum ducimus quibusdam eveniet aut corrupti nihil
            optio tenetur dolorum.
          </p>
        </div>
        <div className="flex">
          {socialMedia.map((social) => (
            <ButtonSocialMedia
              key={social.href}
              icon={social.icon}
              href={social.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
