import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Robel Gebremichael Nrea. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Crafted with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> and passion for
            excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
