import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "Emergency Planning (IS-235.c)",
    issuer: "National Disaster & Emergency Management University (FEMA)",
    date: "April 2025",
    description: "Focused on planning and response in crisis situations",
    status: "Completed",
  },
  {
    title: "Introduction to Hazard Mitigation (IS-393.b)",
    issuer: "National Disaster & Emergency Management University (FEMA)",
    date: "April 2025",
    description: "Focused on reducing long-term risk from hazards",
    status: "Completed",
  },
  {
    title: "Advanced Data Analytics",
    issuer: "Next Gen Employability program (AICTE Approved)",
    date: "Dec 2023",
    description: "Comprehensive data analytics training program",
    status: "Completed",
  },
  {
    title: "Python Development",
    issuer: "TechnoHacks - Online Platform",
    date: "Oct 2023",
    description: "Python programming and development certification",
    status: "Completed",
  },
];

const coursework = [
  "Supply Chain Management",
  "Quality Systems",
  "Operations Analysis",
  "Project Management",
  "Leadership & Organizational Behavior",
  "Decision Making & Risk Assessment",
];

export default function Certifications() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [isCourseworkVisible, setIsCourseworkVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const courseworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    const courseworkObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCourseworkVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (courseworkRef.current) {
      courseworkObserver.observe(courseworkRef.current);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      courseworkObserver.disconnect();
    };
  }, []);

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Certifications & Coursework
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {cert.title}
                      </h3>
                      <Badge
                        variant={cert.status === "Completed" ? "default" : "outline"}
                        className="shrink-0"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card
          ref={courseworkRef}
          className={`p-8 shadow-lg transition-all duration-700 ${
            isCourseworkVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
              >
                <span className="text-primary font-bold text-lg">
                  {index + 1}.
                </span>
                <span className="text-foreground font-medium">{course}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
