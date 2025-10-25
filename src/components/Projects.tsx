import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Integration of TQM and FMEA in Product Development",
    date: "Dec 2023",
    description: [
      "Integrated Total Quality Management (TQM) principles with Failure Mode and Effects Analysis (FMEA) to enhance product quality and reliability",
      "Identified potential failure modes in processes and products, prioritized risks, and proposed effective mitigation strategies",
      "Applied continuous improvement and process standardization to optimize workflows, reduce defects, and enhance operational efficiency",
      "Developed risk assessment reports and quality metrics, strengthening data-driven decision-making skills applicable to supply chain and distribution operations",
      "Gained practical experience in process improvement, quality control, and operational analysis, directly transferable to DC and logistics management roles",
    ],
    tags: ["TQM", "FMEA", "Quality Control", "Process Improvement", "Risk Assessment"],
  },
  {
    title: "Quality Control Analysis and TQM Implementation in a Manufacturing Unit (FOME Project)",
    date: "Jul 2023",
    description: [
      "Analyzed quality shortfalls using advanced spreadsheet techniques, including Pareto Charts, Fishbone Diagrams, and Control Charts",
      "Implemented Total Quality Management (TQM) principles to enhance process reliability and reduce defects",
      "Recommended employee training and process standardization to improve product consistency and quality",
      "Applied quality control tools and Six Sigma fundamentals to strengthen operational excellence and continuous improvement efforts",
    ],
    tags: [
      "TQM",
      "Quality Control",
      "Six Sigma Fundamentals",
      "MS Excel",
      "Process Improvement",
    ],
  },
   {
    title: "Financial Health & Efficiency Analysis: Indian Auto Sector (BEFA Project)",
    date: "Jan 2023",
    description: [
      "Conducted a comprehensive 3-year financial ratio analysis covering liquidity, solvency, and profitability metrics for two leading Indian automobile manufacturers",
      "Benchmarked financial performance to determine the firm demonstrating superior financial stability and operational efficiency",
      "Developed a quantitative model in Excel to analyze and visualize key financial ratios and identify performance trends",
      "Delivered data-driven insights through financial modeling, supporting strategic decision-making and competitive benchmarking",
    ],
    tags: [
      "Financial Analysis",
      "Ratio Analysis",
      "Financial Modeling (Excel)",
      "Comparative Benchmarking",
      "Research & Data Interpretation",
    ],
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="w-fit">
                      {project.date}
                    </Badge>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-2 text-foreground/80">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
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
