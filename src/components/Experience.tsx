import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Foxconn Interconnect Technology (FIT)",
    role: "Project Manager",
    location: "Hyderabad, India",
    period: "Dec 2023 - Aug 2024",
    duration: "1 year",
    responsibilities: [
      "Managed the entire product development and interconnect solution process, starting from design to volume production",
      "Worked with engineering, tooling, quality, and production teams to confirm the design could be manufactured and produced in a timely manner",
      "Created schedules - project schedules, BOMs, and timelines for production using MS Project, SAP and Excel based trackers",
      "Responsible for NPI processes, prototype builds, validation, and DFM reviews",
      "Worked with R&D and mechanical and electrical design engineers regarding the clients specifications",
      "Oversaw cost analysis, procurement coordination, and resource planning for production projects",
      "Sustained detailed documentation including project charters, status reports, risk registers, and lessons learned",
    ],
  },
  {
    company: "EduVetha - Explore the Knowledge",
    role: "Business Development Trainee",
    location: "Bengaluru, India",
    period: "Jul 2023 - Dec 2023",
    duration: "6 months",
    responsibilities: [
      "Led the design, development, and implementation of online learning program, ensuring alignment with learner needs",
      "Collaborated with instructional designers, content creators, and technology teams to deliver high-quality, engaging educational experiences",
      "Established quality assurance processes to maintain program standards and optimize learning outcomes",
      "Supported learner engagement by ensuring access to guidance, resources, and technical assistance, fostering a positive learning environment",
    ],
  },
  {
    company: "ARKLE Energy Solutions",
    role: "Supply Chain & Logistics Operations Intern",
    location: "Remote",
    period: "May 2023 - Aug 2023",
    duration: "4 months",
    responsibilities: [
      "Assisted in end-to-end procurement and vendor management, ensuring timely delivery of materials while negotiating cost-effective agreements",
      "Supported supply chain automation initiatives, streamlining workflows and reducing manual errors in logistics operations",
      "Coordinated with logistics teams to optimize material transportation, improving efficiency and reducing lead times",
      "Analyzed supply chain data to identify process inefficiencies and proposed actionable solutions to improve operational performance",
      "Monitored inventory levels, conducted audits, and implemented strategies to maintain optimal stock levels",
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {exp.duration}
                    </Badge>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2 text-foreground/80">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
