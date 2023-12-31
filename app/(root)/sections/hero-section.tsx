import ButtonSocialMedia from "@/components/ui/button-social-media";
import Image from "next/image";
import { socialMedia } from "@/assets/data";
import Section from "@/components/ui/section";
import Link from "next/link";

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
          <p className="text-gray-400">
            I'm passionate about web development, quantum computing, music, and
            fitness. I've worked on a series of{" "}
            <span>
              <Link href={"/projects"}>projects </Link>
            </span>
            during my time in undergrad and grad school. I'm interested in both
            front and backend development. You can learn more about me in
            <span>
              <Link href={"/about"}> the about page </Link>
            </span>
            or see{" "}
            <span>
              <Link href={"/projects"}>my projects.</Link>
            </span>
          </p>
          <br />
          <p className="text-gray-400">
            When I'm not solving problems using software (or just coding for
            fun), you can find me at the gym, reading a book, or playing video
            games. Feel free to{" "}
            <span>
              <Link href={"/contact"}>contact me.</Link>
            </span>
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
