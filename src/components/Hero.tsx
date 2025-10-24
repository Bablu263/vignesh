import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpeg";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(84, 113, 227, 0.8), rgba(180, 80, 245, 0.8)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-block">
            <img
              src={profileImage}
              alt="Vigneshwar Pothuraju"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl mx-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Vigneshwar Pothuraju
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Project Manager | Engineering Manager
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Manchester, CT | Master of Science in Engineering Management
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm"
            >
              <a
                href="https://www.linkedin.com/in/vigneshwar-goud-pothuraju-d09051602"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
