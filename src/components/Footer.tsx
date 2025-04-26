
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border relative overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent/20"></div>
        <div className="absolute top-8 left-24 w-32 h-32 rounded-full bg-primary/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 font-medium">
              © {currentYear} Pranav Gupta. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-foreground/70">
            <span className="mr-1">Made with</span>
            
            <span className="ml-1">by <span className="text-accent font-medium">Pranav Gupta</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
