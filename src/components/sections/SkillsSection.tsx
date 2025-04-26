
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { 
  Code, 
  FileCode, 
  CircuitBoard, 
  Database, 
  Cloud, 
  Users,
  Globe,
  Cpu,
  Server,
  BrainCircuit,
  Timer,
  Puzzle
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // percentage
  category: "Languages" | "Frameworks" | "Tools/Platforms" | "Soft Skills";
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
    { name: "Java", icon: <Code className="text-blue-500" />, level: 85, category: "Languages" },
    { name: "C++", icon: <FileCode className="text-purple-500" />, level: 80, category: "Languages" },
    { name: "Python", icon: <CircuitBoard className="text-yellow-500" />, level: 75, category: "Languages" },
    { name: "C", icon: <Cpu className="text-red-500" />, level: 85, category: "Languages" },
    { name: "SQL", icon: <Database className="text-green-500" />, level: 70, category: "Languages" },
    { name: "PHP", icon: <FileCode className="text-indigo-500" />, level: 65, category: "Languages" },
    
    // Frameworks
    { name: "HTML", icon: <Globe className="text-orange-500" />, level: 90, category: "Frameworks" },
    { name: "CSS", icon: <FileCode className="text-blue-400" />, level: 85, category: "Frameworks" },
    { name: "JavaScript", icon: <Code className="text-yellow-400" />, level: 80, category: "Frameworks" },
    { name: "React", icon: <CircuitBoard className="text-cyan-400" />, level: 75, category: "Frameworks" },
    
    // Tools/Platforms
    { name: "MySQL", icon: <Database className="text-blue-600" />, level: 80, category: "Tools/Platforms" },
    { name: "MongoDB", icon: <Database className="text-green-600" />, level: 70, category: "Tools/Platforms" },
    { name: "Google Cloud", icon: <Cloud className="text-blue-400" />, level: 65, category: "Tools/Platforms" },
    
    // Soft Skills
    { name: "Teamwork", icon: <Users className="text-purple-400" />, level: 90, category: "Soft Skills" },
    { name: "Time Management", icon: <Timer className="text-amber-500" />, level: 85, category: "Soft Skills" },
    { name: "Flexible", icon: <BrainCircuit className="text-green-400" />, level: 95, category: "Soft Skills" },
    { name: "Adaptive", icon: <Puzzle className="text-blue-400" />, level: 90, category: "Soft Skills" },
    { name: "Punctual", icon: <Server className="text-rose-400" />, level: 95, category: "Soft Skills" },
  ];

  const categories = ["Languages", "Frameworks", "Tools/Platforms", "Soft Skills"];

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-[0.02]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
          
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold mb-8 text-primary border-l-4 border-accent pl-4 relative">
                  {category}
                  <span className="absolute top-0 right-0 w-24 h-1 bg-accent/20 rounded-full"></span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`transition-all duration-700 ${animateSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-card shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow border border-border card-effect">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl p-3 rounded-lg bg-accent/10 flex items-center justify-center">{skill.icon}</span>
                            <h4 className="text-lg font-bold">{skill.name}</h4>
                          </div>
                          
                          <div className="skill-bar mt-3">
                            <div 
                              className="skill-progress"
                              style={{ 
                                width: animateSkills ? `${skill.level}%` : '0%',
                                backgroundColor: getSkillColor(skill.level)
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-foreground/60">Beginner</span>
                            <span className="text-xs text-foreground/60 font-medium">{skill.level}%</span>
                            <span className="text-xs text-foreground/60">Expert</span>
                          </div>
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

// Function to get color based on skill level
function getSkillColor(level: number): string {
  if (level >= 90) return 'rgb(34, 197, 94)'; // green
  if (level >= 75) return 'rgb(59, 130, 246)'; // blue
  if (level >= 60) return 'rgb(250, 204, 21)'; // yellow
  return 'rgb(239, 68, 68)'; // red
}
