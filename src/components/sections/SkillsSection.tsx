
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Code, FileCode, Database, Globe } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const languages: Skill[] = [
    { name: "Java", icon: <Code className="text-blue-500" /> },
    { name: "C++", icon: <FileCode className="text-purple-500" /> },
    { name: "Python", icon: <Code className="text-yellow-500" /> },
    { name: "SQL", icon: <Database className="text-green-500" /> }
  ];

  const webTechnologies: Skill[] = [
    { name: "HTML/CSS", icon: <Globe className="text-orange-500" /> },
    { name: "JavaScript", icon: <Code className="text-yellow-400" /> },
    { name: "React", icon: <Code className="text-blue-400" /> },
    { name: "TypeScript", icon: <FileCode className="text-blue-600" /> }
  ];

  const tools: Skill[] = [
    { name: "Git", icon: <Code className="text-red-500" /> },
    { name: "VS Code", icon: <FileCode className="text-blue-500" /> },
    { name: "Docker", icon: <Database className="text-blue-400" /> },
    { name: "Linux", icon: <Globe className="text-orange-600" /> }
  ];

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-br from-background via-background/95 to-background/90 py-16 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-[0.02]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className={`space-y-16 transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <h2 className="section-title text-center mb-12">Programming Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <div 
                  key={lang.name}
                  className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="group p-6 rounded-xl bg-card hover:shadow-xl transition-all duration-500 border border-border/50">
                    <div className="flex flex-col items-center gap-4">
                      <span className="p-3 rounded-lg bg-background/80">{lang.icon}</span>
                      <h3 className="text-lg font-semibold">{lang.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title text-center mb-12">Web Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {webTechnologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="group p-6 rounded-xl bg-card hover:shadow-xl transition-all duration-500 border border-border/50">
                    <div className="flex flex-col items-center gap-4">
                      <span className="p-3 rounded-lg bg-background/80">{tech.icon}</span>
                      <h3 className="text-lg font-semibold">{tech.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title text-center mb-12">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                >
                  <div className="group p-6 rounded-xl bg-card hover:shadow-xl transition-all duration-500 border border-border/50">
                    <div className="flex flex-col items-center gap-4">
                      <span className="p-3 rounded-lg bg-background/80">{tool.icon}</span>
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
