
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Award, BrainCircuit, Code, Handshake, Heart, MessageSquare, Users } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "Technical" | "Soft Skills";
}

export function AchievementsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const achievements: Achievement[] = [
    // Technical Achievements
    {
      title: "Full Stack Development",
      description: "Mastered multiple programming languages and frameworks, delivering end-to-end solutions.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      category: "Technical"
    },
    {
      title: "Problem Solving Expert",
      description: "Solved 300+ coding challenges and optimized complex algorithms.",
      icon: <BrainCircuit className="h-6 w-6 text-purple-500" />,
      category: "Technical"
    },
    {
      title: "Project Success",
      description: "Successfully delivered 4 major projects with excellent user feedback.",
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      category: "Technical"
    },
    // Soft Skills
    {
      title: "Team Leadership",
      description: "Led multiple project teams, fostering collaboration and achieving project goals.",
      icon: <Users className="h-6 w-6 text-green-500" />,
      category: "Soft Skills"
    },
    {
      title: "Communication Excellence",
      description: "Strong communicator with experience in client presentations and team coordination.",
      icon: <MessageSquare className="h-6 w-6 text-indigo-500" />,
      category: "Soft Skills"
    },
    {
      title: "Emotional Intelligence",
      description: "Demonstrated empathy and adaptability in diverse team environments.",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      category: "Soft Skills"
    },
    {
      title: "Stakeholder Management",
      description: "Successfully managed relationships with clients and team members.",
      icon: <Handshake className="h-6 w-6 text-cyan-500" />,
      category: "Soft Skills"
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
          <h2 className="section-title text-center mb-16">Skills & Achievements</h2>
          
          {["Technical", "Soft Skills"].map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-accent border-l-4 border-accent pl-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements
                  .filter((achievement) => achievement.category === category)
                  .map((achievement, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-accent/5 rounded-xl">
                            {achievement.icon}
                          </div>
                          <h3 className="text-xl font-bold">{achievement.title}</h3>
                        </div>
                        <p className="text-foreground/80">{achievement.description}</p>
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
