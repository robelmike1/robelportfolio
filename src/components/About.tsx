import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Software Engineering",
      description: "Degree in Software Engineering with a strong foundation in programming and development.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that enhance user experience and engagement.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, responsive web applications optimized for all devices.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Crafting functional and responsive experiences that solve real user problems.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Flying Code Background */}
      <div className="code-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.2,
            }}
          >
            {['<div>','</div>','class=','style=','props','state','render','map','filter'][Math.floor(Math.random() * 9)]}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate front-end developer with a Software Engineering degree, dedicated to creating exceptional digital experiences
            through clean code and beautiful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-primary/20 animate-fade-in">
            <CardContent className="p-0 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  <span className="text-primary">Educational Background</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a degree in Software Engineering, I've built a strong foundation in programming principles, 
                  software architecture, and modern development practices. This academic background, combined with 
                  hands-on experience, enables me to approach web development with both technical rigor and creative flair.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Palette className="w-6 h-6 text-primary" />
                  <span className="text-primary">Professional Philosophy</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that great web experiences are born from the perfect harmony of functionality and aesthetics.
                  My passion lies in crafting responsive, user-friendly interfaces using modern technologies like HTML, CSS, 
                  JavaScript, and React. Every project is an opportunity to blend technical excellence with beautiful design, 
                  creating digital solutions that are both powerful and delightful to use.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
