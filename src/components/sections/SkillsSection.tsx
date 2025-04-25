
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { 
  Code, 
  FileCode, 
  CircuitBoard, 
  Database, 
  Cloud, 
  Users,
  Timer,
  BrainCircuit,
  Puzzle,
  Globe,
  Cpu,
  Server
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "Languages" | "Frameworks" | "Tools/Platforms" | "Soft Skills";
  level?: number;
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [animateSkills, setAnimateSkills] = useState(false);
  
  useEffect(() => {
    if (hasIntersected) {
      setAnimateSkills(true);
    }
  }, [hasIntersected]);

  const skills: Skill[] = [
    // Languages
    { name: "Java", icon: <Code className="text-blue-500" />, category: "Languages", level: 85 },
    { name: "C++", icon: <FileCode className="text-purple-500" />, category: "Languages", level: 80 },
    { name: "Python", icon: <CircuitBoard className="text-yellow-500" />, category: "Languages", level: 90 },
    { name: "C", icon: <Cpu className="text-red-500" />, category: "Languages", level: 75 },
    { name: "SQL", icon: <Database className="text-green-500" />, category: "Languages", level: 85 },
    { name: "PHP", icon: <FileCode className="text-indigo-500" />, category: "Languages", level: 70 },
    
    // Frameworks
    { name: "HTML", icon: <Globe className="text-orange-500" />, category: "Frameworks", level: 95 },
    { name: "CSS", icon: <FileCode className="text-blue-400" />, category: "Frameworks", level: 90 },
    { name: "JavaScript", icon: <Code className="text-yellow-400" />, category: "Frameworks", level: 85 },
    { name: "React", icon: <CircuitBoard className="text-cyan-400" />, category: "Frameworks", level: 80 },
    
    // Tools/Platforms
    { name: "MySQL", icon: <Database className="text-blue-600" />, category: "Tools/Platforms", level: 85 },
    { name: "MongoDB", icon: <Database className="text-green-600" />, category: "Tools/Platforms", level: 75 },
    { name: "Google Cloud", icon: <Cloud className="text-blue-400" />, category: "Tools/Platforms", level: 70 },
    
    // Soft Skills - Updated with your requested skills
    { name: "Teamwork", icon: <Users className="text-purple-400" />, category: "Soft Skills" },
    { name: "Time Management", icon: <Timer className="text-amber-500" />, category: "Soft Skills" },
    { name: "Flexible", icon: <BrainCircuit className="text-green-400" />, category: "Soft Skills" },
    { name: "Adaptive", icon: <Puzzle className="text-blue-400" />, category: "Soft Skills" },
  ];

  const categories = ["Languages", "Frameworks", "Tools/Platforms", "Soft Skills"];

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden py-20"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <div className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxMmE1LjQ5IDUuNDkgMCAwIDAtLjM0IDEuOTRjMCAzLjAyIDIuNDUgNS40NyA1LjQ3IDUuNDdzNS40Ny0yLjQ1IDUuNDctNS40N2MwLS42Ni0uMTItMS4zLS4zNC0xLjk0TDM2IDEyem0tMTIgMGE1LjQ5IDUuNDkgMCAwIDAtLjM0IDEuOTRjMCAzLjAyIDIuNDUgNS40NyA1LjQ3IDUuNDdzNS40Ny0yLjQ1IDUuNDctNS40N2MwLS42Ni0uMTItMS4zLS4zNC0xLjk0TDI0IDEyem0tMTIgMGE1LjQ5IDUuNDkgMCAwIDAtLjM0IDEuOTRjMCAzLjAyIDIuNDUgNS40NyA1LjQ3IDUuNDdzNS40Ny0yLjQ1IDUuNDctNS40N2MwLS42Ni0uMTItMS4zLS4zNC0xLjk0TDEyIDEyem0wIDEyYTUuNDkgNS40OSAwIDAgMC0uMzQgMS45NGMwIDMuMDIgMi40NSA1LjQ3IDUuNDcgNS40N3M1LjQ3LTIuNDUgNS40Ny01LjQ3YzAtLjY2LS4xMi0xLjMtLjM0LTEuOTRMMTIgMjR6bTEyIDBhNS40OSA1LjQ5IDAgMCAwLS4zNCAxLjk0YzAgMy4wMiAyLjQ1IDUuNDcgNS40NyA1LjQ3czUuNDctMi40NSA1LjQ3LTUuNDdjMC0uNjYtLjEyLTEuMy0uMzQtMS45NEwyNCAyNHptMTIgMGE1LjQ5IDUuNDkgMCAwIDAtLjM0IDEuOTRjMCAzLjAyIDIuNDUgNS40NyA1LjQ3IDUuNDdzNS40Ny0yLjQ1IDUuNDctNS40N2MwLS42Ni0uMTItMS4zLS4zNC0xLjk0TDM2IDI0em0wIDEyYTUuNDkgNS40OSAwIDAgMC0uMzQgMS45NGMwIDMuMDIgMi40NSA1LjQ3IDUuNDcgNS40N3M1LjQ3LTIuNDUgNS40Ny01LjQ3YzAtLjY2LS4xMi0xLjMtLjM0LTEuOTRMMzYgMzZ6bS0xMiAwYTUuNDkgNS40OSAwIDAgMC0uMzQgMS45NGMwIDMuMDIgMi40NSA1LjQ3IDUuNDcgNS40N3M1LjQ3LTIuNDUgNS40Ny01LjQ3YzAtLjY2LS4xMi0xLjMtLjM0LTEuOTRMMjQgMzZ6bS0xMiAwYTUuNDkgNS40OSAwIDAgMC0uMzQgMS45NGMwIDMuMDIgMi40NSA1LjQ3IDUuNDcgNS40N3M1LjQ3LTIuNDUgNS40Ny01LjQ3YzAtLjY2LS4xMi0xLjMtLjM0LTEuOTRMMTIgMzZ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
          
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-primary/90 border-l-4 border-accent pl-3">{category}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`transition-all duration-700 delay-${index * 100} ${animateSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-card/80 backdrop-blur-sm shadow-lg rounded-lg p-5 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/10 hover:border-accent/30 group">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="text-2xl p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">{skill.icon}</div>
                            <h4 className="text-lg font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text dark:text-transparent">{skill.name}</h4>
                          </div>
                          
                          {skill.level && (
                            <div className="mt-2">
                              <div className="skill-bar">
                                <div 
                                  className={`skill-progress progress-animate ${animateSkills ? 'entered' : ''}`}
                                  style={{ 
                                    width: animateSkills ? `${skill.level}%` : '0%',
                                    '--progress-width': `${skill.level}%`
                                  } as React.CSSProperties}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
