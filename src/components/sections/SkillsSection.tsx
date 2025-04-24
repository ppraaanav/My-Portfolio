
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { 
  Code, 
  FileCode, 
  CircuitBoard, 
  Database, 
  Cloud, 
  Users 
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
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
    { name: "Java", icon: <Code />, category: "Languages" },
    { name: "C++", icon: <FileCode />, category: "Languages" },
    { name: "Python", icon: <CircuitBoard />, category: "Languages" },
    { name: "C", icon: <Code />, category: "Languages" },
    { name: "SQL", icon: <Database />, category: "Languages" },
    { name: "PHP", icon: <FileCode />, category: "Languages" },
    
    // Frameworks
    { name: "HTML", icon: <FileCode />, category: "Frameworks" },
    { name: "CSS", icon: <FileCode />, category: "Frameworks" },
    { name: "JavaScript", icon: <Code />, category: "Frameworks" },
    { name: "React", icon: <CircuitBoard />, category: "Frameworks" },
    
    // Tools/Platforms
    { name: "MySQL", icon: <Database />, category: "Tools/Platforms" },
    { name: "MongoDB", icon: <Database />, category: "Tools/Platforms" },
    { name: "Google Cloud", icon: <Cloud />, category: "Tools/Platforms" },
    
    // Soft Skills
    { name: "Teamwork", icon: <Users />, category: "Soft Skills" },
    { name: "Time Management", icon: <Code />, category: "Soft Skills" },
    { name: "Flexible", icon: <CircuitBoard />, category: "Soft Skills" },
    { name: "Adaptive", icon: <FileCode />, category: "Soft Skills" },
    { name: "Punctual", icon: <Code />, category: "Soft Skills" },
  ];

  const categories = ["Languages", "Frameworks", "Tools/Platforms", "Soft Skills"];

  return (
    <section 
      id="skills" 
      className="bg-background"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
          
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-primary border-l-4 border-accent pl-3">{category}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`transition-all duration-700 delay-${index * 100} ${animateSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-card shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl text-primary">{skill.icon}</span>
                            <h4 className="text-lg font-medium">{skill.name}</h4>
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
