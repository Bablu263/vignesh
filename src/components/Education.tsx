import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "Cumberland University",
    degree: "Master of Science in Engineering Management",
    location: "Lebanon, Tennessee",
    period: "Aug 2024 - Ongoing",
    gpa: "3.75/4.0",
    status: "In Progress",
  },
  {
    institution: "Bharat Institute of Engineering and Technology",
    degree: "Bachelor of Technology",
    major: "Electronics and Communication Engineering",
    location: "Hyderabad, India",
    period: "2021 - 2024",
    gpa: "7.0/10.0",
    status: "Completed",
  },
];

export default function Education() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-700 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                    {edu.status}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  {edu.major && (
                    <p className="text-sm text-muted-foreground mb-1">
                      {edu.major}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-primary">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">GPA</span>
                    <span className="text-lg font-bold text-primary">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
