
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-code-pattern bg-cover bg-center bg-no-repeat pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 dark:from-background/95 dark:via-background/90 dark:to-background/80"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Pranav Kumar Gupta <span className="text-accent">Gupta</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Computer Science Engineer & Software Developer
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 shadow-lg"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="h-5 w-5 mr-1" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="flex gap-2 items-center justify-center">
              <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <p className="text-sm text-foreground/70">Scroll down to see more</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
