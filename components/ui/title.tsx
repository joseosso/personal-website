interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="text-3xl font-light text-white my-6">{title}</h1>;
};

export default Title;
