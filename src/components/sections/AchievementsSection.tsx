
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Award, BrainCircuit, Code, Handshake, Heart, MessageSquare, Trophy, Users } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  year: string;
}

export function AchievementsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const achievements: Achievement[] = [
    {
      title: "Best Academic Performance",
      description: "Top performer in the academic year with highest CGPA.",
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      year: "2022"
    },
    {
      title: "Hackathon Winner",
      description: "First place at the National Coding Challenge with innovative solution.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      year: "2021"
    },
    {
      title: "Research Publication",
      description: "Co-authored research paper published in a peer-reviewed journal.",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      year: "2023"
    },
    {
      title: "Community Leadership",
      description: "Led community tech outreach program, impacting over 100 students.",
      icon: <Users className="h-6 w-6 text-green-500" />,
      year: "2022"
    },
    {
      title: "Project Excellence Award",
      description: "Received recognition for outstanding project implementation.",
      icon: <BrainCircuit className="h-6 w-6 text-indigo-500" />,
      year: "2023"
    },
    {
      title: "Open Source Contribution",
      description: "Significant contributions to major open-source projects.",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      year: "2022"
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
          <h2 className="section-title text-center mb-16">Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-accent/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 h-full relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 bg-accent/10 rounded-full w-24 h-24 flex items-end justify-end p-2 opacity-20">
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4 z-10">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <span className="text-sm text-accent">{achievement.year}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 z-10">{achievement.description}</p>
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
