import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20 relative overflow-hidden">
      {/* Flying Code Background */}
      <div className="code-rain">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            {['</>','{}','[]','()','console.log()','const','let','function','return','import','export','async','await'][Math.floor(Math.random() * 13)]}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-glow-pulse"></div>
              <img
                src={profilePicture}
                alt="Robel Gebremichael Nrea - Front-End Developer"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary shadow-glow"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <span className="text-primary text-lg font-semibold tracking-wider uppercase">
                Front-End Developer
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Robel Gebremichael{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Nrea</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Passionate about crafting clean, beautiful, and user-friendly web experiences that
              bring ideas to life with modern technologies and elegant design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group shadow-glow hover:shadow-strong transition-all"
              >
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Download className="mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
