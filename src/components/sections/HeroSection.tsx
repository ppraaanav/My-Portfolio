
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-code-pattern bg-cover bg-center bg-no-repeat pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 dark:from-background/95 dark:via-background/90 dark:to-background/80"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative overflow-hidden">
              <span className="relative z-10">Pranav</span>
              <span className="text-accent ml-3 relative inline-block overflow-hidden">
                Gupta
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent rounded-full transform scale-x-100 origin-left"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Computer Science Engineer & Software Developer
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="h-5 w-5 mr-1" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={scrollToNextSection}
              className="flex flex-col items-center text-foreground/70 hover:text-accent transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="h-5 w-5 animate-bounce-subtle" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated gradient bottom layer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="0.1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="text-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
