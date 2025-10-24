import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 gradient-text transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>

        <Card
          className={`p-8 md:p-12 shadow-xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            A confident and well-organized <span className="text-primary font-semibold">Project Manager</span> with one year of experience supervising the execution of projects and performance of team members. A decision-maker who can prioritize tasks and communicate effectively to maintain an even workflow and successful completion of objectives.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">3.75</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
