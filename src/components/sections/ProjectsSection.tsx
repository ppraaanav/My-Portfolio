
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Code, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  techUsed: string[];
  link: string;
  featured?: boolean;
}

export function ProjectsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      title: "E-Commerce",
      description: "Designed a responsive interface using React.js and integrated secure backend APIs. Engineered robust data validation protocols, reducing security vulnerabilities by identifying critical issues within the first month. Implemented user authentication, payment gateway services, and performance optimizations for an enhanced user experience.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
      date: "Jan-Apr 2024",
      techUsed: ["MongoDB", "Express JS", "React JS", "Node JS", "Postman"],
      link: "#",
      featured: true
    },
    {
      title: "4-Play",
      description: "Built an interactive platform where users can watch both recorded videos and live streams. Designed a colorful and immersive interface, integrated real-time streaming, and improved performance for a seamless viewing experience.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "May 2022",
      techUsed: ["JavaScript", "Node.js", "HTML", "CSS", "WebRTC", "Express.js", "MongoDB/MySQL"],
      link: "https://github.com/pranavsr/4Play",
      featured: true
    },
    {
      title: "University Management System",
      description: "Collaborated on a group project to develop a platform providing essential information about the university and its departments. Created an intuitive interface and implemented a structured content management system.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
      date: "April 2022",
      techUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://pranavsr.github.io/UMS/",
      featured: true
    },
    {
      title: "Food Fiesta",
      description: "Food Fiesta is a user-friendly application that lets customers order their favorite food online and get it delivered to their location. It features a clean and intuitive interface, integrated real-time order tracking, and streamlined the experience for quick and easy food ordering.",
      imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1080&auto=format&fit=crop",
      date: "April 2022",
      techUsed: ["JavaScript", "React.js", "HTML", "CSS", "Node.js"],
      link: "#"
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

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section 
      id="projects" 
      className="bg-secondary/30 dark:bg-secondary/5 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-8">Projects</h2>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card/50 backdrop-blur-sm rounded-full p-1 shadow-md">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-accent text-white shadow-md' 
                    : 'hover:bg-background/50'
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('featured')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'featured' 
                    ? 'bg-accent text-white shadow-md' 
                    : 'hover:bg-background/50'
                }`}
              >
                Featured
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="bg-card rounded-xl overflow-hidden shadow-md h-full cursor-pointer relative group"
                  onClick={() => openProjectDetails(project)}
                >
                  {/* Project image with overlay */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        View Details
                      </Button>
                    </div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-accent text-white text-xs font-medium py-1 px-2 rounded shadow-md">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center justify-between group">
                  <span className="group-hover:text-accent transition-colors">{selectedProject.title}</span>
                  <span className="text-sm font-normal text-foreground/60 bg-secondary px-2 py-1 rounded">
                    {selectedProject.date}
                  </span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="my-6 rounded-lg overflow-hidden shadow-md border border-border">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>
              
              <DialogDescription className="text-foreground text-base space-y-4">
                <p className="leading-relaxed">{selectedProject.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techUsed.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogDescription>
              
              {selectedProject.link && (
                <div className="flex justify-end mt-6 gap-3">
                  <Button 
                    variant="outline"
                    className="border-accent/30 hover:border-accent"
                    asChild
                  >
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  </Button>
                  
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white"
                    asChild
                  >
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Project
                    </a>
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
