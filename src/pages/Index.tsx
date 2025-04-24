
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Function to handle scroll position and apply animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((el) => {
        const elementTop = (el as HTMLElement).getBoundingClientRect().top;
        const elementHeight = (el as HTMLElement).offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - elementHeight / 3) {
          (el as HTMLElement).classList.add("entered");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check in case elements are already in view
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
