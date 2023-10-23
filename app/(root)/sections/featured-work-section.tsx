import Button from "@/components/ui/button";
import CardFeaturedWork from "@/components/ui/card-featured-work";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

const FeaturedWorkSection = () => {
  return (
    <Section id="featuredWork">
      <Title title="Featured Work" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        <CardFeaturedWork
          alt="QPLEX"
          src="/QPLEX_logo.png"
          title="QPLEX"
          description="A Python library for modelling and solving combinatorial optimization problems 
          using classical and quantum computers"
          category="Quantum"
          href="projects/qplex"
        />
        <CardFeaturedWork
          alt="QWalkVis"
          src="/q-walk-vis_logo.png"
          title="QWalkVis"
          description="A Python library for modelling and solving optimization problems 
          using classical and quantum computers"
          category="Education"
          href="projects/qwalkvis"
        />
        <CardFeaturedWork
          alt="SNXS"
          src="/QPLEX_logo.png"
          title="SNXS"
          description="A Python library for modelling and solving optimization problems 
          using classical and quantum computers"
          category="Cybersecurity"
          href="projects/snxs"
        />
      </div>
      <Button />
    </Section>
  );
};

export default FeaturedWorkSection;
