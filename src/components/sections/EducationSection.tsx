
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  icon: string;
}

export function EducationSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const educationData: Education[] = [
    {
      degree: "Bachelor of Technology",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      startDate: "August 2022",
      endDate: "Present",
      grade: "CGPA: 6.34",
      icon: "🎓"
    },
    {
      degree: "Intermediate",
      institution: "BHEL, Shiksha Niketan",
      location: "Jhansi, Uttar Pradesh",
      startDate: "April 2021",
      endDate: "March 2022",
      grade: "Percentage: 77.4%",
      icon: "🏫"
    },
    {
      degree: "Matriculation",
      institution: "Christ The King College",
      location: "Jhansi, Uttar Pradesh",
      startDate: "April 2019",
      endDate: "March 2020",
      grade: "Percentage: 77.7%",
      icon: "🏫"
    }
  ];

  return (
    <section 
      id="education" 
      className="bg-background relative"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Education</h2>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:translate-x-[-0.5px]"></div>
            
            {/* Education Items */}
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${hasIntersected ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Circle on Timeline */}
                  <div className="absolute left-[-8px] md:left-1/2 top-0 md:transform md:translate-x-[-8px] w-4 h-4 bg-accent rounded-full border-2 border-white dark:border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                    <div className="bg-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border border-border">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-accent/10 rounded-full p-3 text-accent">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <h4 className="text-primary/90 font-medium">{item.institution}</h4>
                        </div>
                      </div>
                      
                      <div className="text-foreground/70">
                        <p className="mb-1">{item.location}</p>
                        <p className="mb-1">{item.startDate} - {item.endDate}</p>
                        <p className="font-medium text-accent">{item.grade}</p>
                      </div>
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
