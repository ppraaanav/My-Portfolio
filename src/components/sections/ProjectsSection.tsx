
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Code, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  techUsed: string[];
  link: string;
}

export function ProjectsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "4-Play",
      description: "Built an interactive platform where users can watch both recorded videos and live streams. Designed a colorful and immersive interface, integrated real-time streaming, and improved performance for a seamless viewing experience.",
      imageUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1074&auto=format&fit=crop",
      date: "May 2022",
      techUsed: ["JavaScript", "Node.js", "HTML", "CSS", "WebRTC", "Express.js", "MongoDB/MySQL"],
      link: "https://github.com/pranavsr/4Play",
    },
    {
      title: "Food Fiesta",
      description: "Food Fiesta is a user-friendly application that lets customers order their favorite food online and get it delivered to their location. It features a clean and intuitive interface, integrated real-time order tracking, and streamlined the experience for quick and easy food ordering.",
      imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1080&auto=format&fit=crop",
      date: "April 2022",
      techUsed: ["JavaScript", "React.js", "HTML", "CSS", "Node.js"],
      link: "#",
    },
    {
      title: "University Management System",
      description: "Collaborated on a group project to develop a platform providing essential information about the university and its departments. Created an intuitive interface and implemented a structured content management system.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
      date: "April 2022",
      techUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://pranavsr.github.io/UMS/",
    },
    {
      title: "Fitness Club",
      description: "Designed and developed an HTML template for a fitness club with a simple, minimalist design. The website serves as a gym platform for fitness enthusiasts, featuring easy registration, login, workout plans, membership management and more.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      date: "June 2022",
      techUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://pranavsr.github.io/Fitness_Club_CSE_Project/",
    },
  ];

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section 
      id="projects" 
      className="bg-secondary/30 dark:bg-secondary/5"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`card-hover transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openProjectDetails(project)}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-md h-full cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs text-foreground/60 bg-secondary px-2 py-1 rounded">{project.date}</span>
                    </div>
                    
                    <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techUsed.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techUsed.length > 3 && (
                        <span className="text-xs bg-secondary text-foreground/70 px-2 py-1 rounded-full">
                          +{project.techUsed.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center justify-between">
                  {selectedProject.title}
                  <span className="text-sm font-normal text-foreground/60 bg-secondary px-2 py-1 rounded">
                    {selectedProject.date}
                  </span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="my-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>
              
              <DialogDescription className="text-foreground text-base">
                {selectedProject.description}
              </DialogDescription>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techUsed.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                <div className="flex justify-end mt-6">
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
