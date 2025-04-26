
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export function CertificationsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const certifications: Certification[] = [
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "March 2023",
      image: "https://github.com/ppraaanav/lumina-web-artist/blob/main/public/DSAgfg.pdf",
      link: "#"
    },
    {
      title: "Data Analysis and Algorithm",
      issuer: "Coursera",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "LinkedInLearning",
      date: "February 2023",
      image: "public/MOOCsFullStack.pdf",
      link: "#"
    },
    {
      title: "Python",
      issuer: "Udemy",
      date: "July 2022",
      image: "public/PythonUdemy.pdf",
      link: "#"
    },
    {
      title: "C Badge",
      issuer: "HackerRank",
      date: "April 2022",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Python Badge",
      issuer: "HackerRank",
      date: "July 2022",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcb970?q=80&w=1374&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section 
      id="certifications" 
      className="bg-secondary/30 dark:bg-secondary/5"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 delay-${index * 100} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-md h-full card-hover">
                  <div 
                    className="h-48 overflow-hidden cursor-pointer" 
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        {cert.title}
                      </h3>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">{cert.issuer}</span>
                      <span className="text-xs text-foreground/60 bg-secondary px-2 py-1 rounded">{cert.date}</span>
                    </div>
                    
                    {cert.link && (
                      <div className="mt-4 flex justify-end">
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 text-sm flex items-center gap-1"
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Certificate"
                className="w-full h-auto"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-background/80 rounded-full p-1"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
