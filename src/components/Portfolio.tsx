import { ExternalLink, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Corporate Dashboard",
      description:
        "Internal company dashboard for data visualization and analytics with real-time updates and interactive charts. Built with React and modern UI/UX principles.",
      image: project1,
      technologies: ["React", "TypeScript", "CSS3", "UI/UX"],
    },
    {
      title: "Business Web Application",
      description:
        "Full-featured business application with complex workflows, user management, and responsive design. Focus on functionality and seamless user experience.",
      image: project2,
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Modern Landing Page",
      description:
        "High-converting landing page with smooth animations, modern design patterns, and optimized performance. Clean, professional aesthetic with neon accents.",
      image: project3,
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Flying Code Background */}
      <div className="code-rain">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.2,
            }}
          >
            {['if()','else','for','while','switch','case','break','continue','typeof'][Math.floor(Math.random() * 9)]}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of internal company projects and web applications demonstrating expertise in front-end development,
            modern UI/UX design, and responsive architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-primary/20 overflow-hidden group hover:border-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="hero" size="icon">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Code className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
