import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Project Management Approaches and Methodologies",
    icon: Target,
    skills: [
    "Waterfall Methodology",
    "Agile Methodology",
    "Scrum Framework",
    "Kanban Framework",
    "Lean Project Management",
    "Hybrid Project Management",
    ],
  },
  {
  title: "Project Management Techniques and Tools",
  icon: Target,
  skills: [
    "Gantt Charts",
    "Work Breakdown Structure (WBS)",
    "Risk Matrix",
    "Critical Path Method (CPM)",
    "Project Network Diagrams",
    "PERT (Program Evaluation and Review Technique)",
    "RACI Matrix",
    "Project Charter",
  ],
},
  {
    title: "Leadership & Management",
    icon: Users,
    skills: [
      "Team Leadership",
      "Project Management",
      "Cross-Functional Collaboration",
      "Decision-Making Under Pressure",
      "Change Management",
      "Continuous Improvement (Lean/Kaizen)",
    ],
  },
  {
    title: "Analytical & Technical",
    icon: BarChart3,
    skills: [
      "Data Analysis & Reporting",
      "Microsoft Office Suite & Excel",
      "Pivot Tables, VLOOKUP, Data Visualization",
      "Power BI",
      "Microsoft PowerPoint",
      "ERP/WMS Familiarity",
      "Root Cause Analysis (RCA)",
    ],
  },
  {
    title: "Strategic & Professional",
    icon: Target,
    skills: [
      "Process Improvement",
      "Time Management",
      "Strategic Thinking",
      "Adaptability & Flexibility",
      "Communication & Interpersonal Skills",
      "Customer-Focused Mindset",
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 gradient-primary rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}