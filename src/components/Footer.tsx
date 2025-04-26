
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {currentYear} Pranav Kumar Gupta. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-foreground/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by Pranav Kumar Gupta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
