
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Star } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function AchievementsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const achievements: Achievement[] = [
    {
      title: "Data Structures Expert",
      description: "Learned to design and implement efficient solutions for coding interview problems.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Algorithm Optimization",
      description: "Optimized algorithms for real-world challenges, improving problem-solving speed.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Project Success",
      description: "Successfully delivered 4 major projects with positive user feedback.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Technical Proficiency",
      description: "Mastered multiple programming languages and frameworks for versatile development.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Memory Management",
      description: "Developed expertise in efficient memory management techniques for resource optimization.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Problem-Solving",
      description: "Consistently demonstrated strong problem-solving abilities in complex technical challenges.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    }
  ];

  return (
    <section 
      id="achievements" 
      className="bg-background"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-accent/10 rounded-full">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-foreground/70">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
