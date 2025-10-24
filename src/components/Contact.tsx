import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vgnsgoud.8876@gmail.com",
    href: "mailto:vgnsgoud.8876@gmail.com",
  },
  {
    icon: Phone,
    label: "US Phone",
    value: "+1 (860) 494-1019",
    href: "tel:+18604941019",
  },
  {
    icon: Phone,
    label: "India Phone",
    value: "+91 849 897 7866",
    href: "tel:+918498977866",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manchester, CT 06040, USA",
    href: null,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/vigneshwar-goud-pothuraju-d09051602",
    color: "hover:bg-[#0077b5] hover:text-white",
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just having a conversation. Feel free to reach out!
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-foreground">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card
          className={`p-8 text-center shadow-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant="outline"
                  className={`transition-all ${social.color}`}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {social.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
