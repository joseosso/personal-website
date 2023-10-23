import Image from "next/image";
import Link from "next/link";

interface CardFeaturedWorkProps {
  alt: string;
  src: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

const CardFeaturedWork = ({
  alt,
  src,
  title,
  description,
  category,
  href,
}: CardFeaturedWorkProps) => {
  return (
    <Link href={href} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <h5 className="text-gray-500 uppercase tracking-widest font-medium">
        {category}
      </h5>
      <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-400">
        {title}
      </h3>
      <h4>{description}</h4>
    </Link>
  );
};

export default CardFeaturedWork;
