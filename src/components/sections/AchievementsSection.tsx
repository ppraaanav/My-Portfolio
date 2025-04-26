
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { BrainCircuit, Code, Database, FileCode, Puzzle, Server, Timer, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "Technical" | "Soft Skills";
}

export function AchievementsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const skillCategories: SkillCategory[] = [
    // Technical Categories
    {
      title: "Programming",
      description: "Java, C++, Python, C, SQL, PHP",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      type: "Technical"
    },
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React",
      icon: <FileCode className="h-6 w-6 text-purple-500" />,
      type: "Technical"
    },
    {
      title: "Databases",
      description: "MySQL, MongoDB",
      icon: <Database className="h-6 w-6 text-green-500" />,
      type: "Technical"
    },
    // Soft Skills
    {
      title: "Teamwork",
      description: "Effective collaboration in group settings",
      icon: <Users className="h-6 w-6 text-green-500" />,
      type: "Soft Skills"
    },
    {
      title: "Time Management",
      description: "Prioritizing tasks and meeting deadlines",
      icon: <Timer className="h-6 w-6 text-indigo-500" />,
      type: "Soft Skills"
    },
    {
      title: "Flexible",
      description: "Adapting to new situations and requirements",
      icon: <Puzzle className="h-6 w-6 text-rose-500" />,
      type: "Soft Skills"
    },
    {
      title: "Adaptive",
      description: "Quick learning and adjusting to new technologies",
      icon: <BrainCircuit className="h-6 w-6 text-cyan-500" />,
      type: "Soft Skills"
    }
  ];

  return (
    <section 
      id="achievements" 
      className="bg-background/80 backdrop-blur-sm py-16"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Skills Overview</h2>
          
          {["Technical", "Soft Skills"].map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-accent border-l-4 border-accent pl-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories
                  .filter((skillCategory) => skillCategory.type === category)
                  .map((skillCategory, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-card border border-accent/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-accent/5 rounded-xl">
                            {skillCategory.icon}
                          </div>
                          <h3 className="text-xl font-bold">{skillCategory.title}</h3>
                        </div>
                        <p className="text-foreground/80">{skillCategory.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
