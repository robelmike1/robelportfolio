import { Layout, Palette, Code2, Smartphone, Zap, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Fully Functional Websites",
      description:
        "Building complete, responsive front-end websites that work seamlessly across all devices and browsers with modern UI/UX principles.",
    },
    {
      icon: Code2,
      title: "Static & Dynamic Websites",
      description:
        "Creating both static landing pages and dynamic web applications using HTML, CSS, JavaScript, and React with clean, maintainable code.",
    },
    {
      icon: Palette,
      title: "Modern UI/UX Design",
      description:
        "Designing beautiful, intuitive user interfaces that enhance user experience and reflect your brand identity with contemporary design trends.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Implementing mobile-first strategies to ensure your website looks perfect and functions flawlessly on all screen sizes and devices.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing websites for lightning-fast load times, smooth interactions, and excellent SEO performance.",
    },
    {
      icon: Layers,
      title: "Component-Based Development",
      description:
        "Building scalable, reusable component architectures using React and modern frameworks for maintainable, future-proof solutions.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
            {['{','}','[',']','(',')','=>',':','===','&&','||'][Math.floor(Math.random() * 11)]}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive front-end development services to bring your digital vision to
            life with modern technologies and exceptional design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors border border-primary/30">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card p-8 rounded-2xl border border-primary/20">
            <p className="text-lg text-muted-foreground mb-2">
              Looking for custom solutions? Let's discuss your project!
            </p>
            <p className="text-primary font-semibold">
              Every project is unique and deserves a tailored approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
