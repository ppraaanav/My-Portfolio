
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  icon: string;
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
    { name: "Java", percentage: 90, icon: "☕", category: "Languages" },
    { name: "C++", percentage: 85, icon: "🔠", category: "Languages" },
    { name: "Python", percentage: 80, icon: "🐍", category: "Languages" },
    { name: "C", percentage: 85, icon: "©️", category: "Languages" },
    { name: "SQL", percentage: 75, icon: "🗃️", category: "Languages" },
    { name: "PHP", percentage: 65, icon: "🐘", category: "Languages" },
    
    // Frameworks
    { name: "HTML", percentage: 95, icon: "🌐", category: "Frameworks" },
    { name: "CSS", percentage: 85, icon: "🎨", category: "Frameworks" },
    { name: "JavaScript", percentage: 80, icon: "📜", category: "Frameworks" },
    { name: "React", percentage: 75, icon: "⚛️", category: "Frameworks" },
    
    // Tools/Platforms
    { name: "MySQL", percentage: 80, icon: "🛢️", category: "Tools/Platforms" },
    { name: "MongoDB", percentage: 75, icon: "🍃", category: "Tools/Platforms" },
    { name: "Google Cloud", percentage: 70, icon: "☁️", category: "Tools/Platforms" },
    
    // Soft Skills
    { name: "Teamwork", percentage: 95, icon: "👥", category: "Soft Skills" },
    { name: "Time Management", percentage: 90, icon: "⏱️", category: "Soft Skills" },
    { name: "Flexible", percentage: 85, icon: "🧘", category: "Soft Skills" },
    { name: "Adaptive", percentage: 90, icon: "🔄", category: "Soft Skills" },
    { name: "Punctual", percentage: 95, icon: "⏰", category: "Soft Skills" },
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
                            <span className="text-2xl">{skill.icon}</span>
                            <h4 className="text-lg font-medium">{skill.name}</h4>
                          </div>
                          
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ 
                                width: animateSkills ? `${skill.percentage}%` : '0%',
                                transitionDelay: `${index * 100 + 300}ms`
                              }}
                            ></div>
                          </div>
                          
                          <div className="text-right mt-1 text-sm text-foreground/70">
                            {skill.percentage}%
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
