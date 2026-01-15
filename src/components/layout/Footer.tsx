import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">Dev</span>
            <span className="text-foreground">.</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Fatto con</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>e tanto ☕</span>
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tutti i diritti riservati
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
