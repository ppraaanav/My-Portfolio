
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Code, FileCode, Database, Globe } from "lucide-react";

interface Language {
  name: string;
  icon: React.ReactNode;
  image: string;
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const programmingLanguages: Language[] = [
    {
      name: "Java",
      icon: <Code className="text-blue-500" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=500"
    },
    {
      name: "C++",
      icon: <FileCode className="text-purple-500" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=500"
    },
    {
      name: "Python",
      icon: <Code className="text-yellow-500" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=500"
    },
    {
      name: "SQL",
      icon: <Database className="text-green-500" />,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&w=500"
    },
    {
      name: "HTML/CSS",
      icon: <Globe className="text-orange-500" />,
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&w=500"
    },
    {
      name: "JavaScript",
      icon: <Code className="text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&w=500"
    },
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
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Programming Languages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative overflow-hidden rounded-xl bg-card hover:shadow-xl transition-all duration-500 border border-border/50">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={lang.image} 
                      alt={`${lang.name} Programming`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 w-full p-4">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">{lang.icon}</span>
                      <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
