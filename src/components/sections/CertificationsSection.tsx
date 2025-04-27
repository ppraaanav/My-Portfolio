
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export function CertificationsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const certifications: Certification[] = [
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "March 2023",
      link: "https://drive.google.com/file/d/10KYMZPlQHuJW_z4A6EKoGWBJMrEYI_SU/view?usp=drive_link"
    },
    {
      title: "Generative AI",
      issuer: "Coursera",
      date: "July 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/FAK8MPCLW68L?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Full Stack Web Development",
      issuer: "LinkedInLearning",
      date: "February 2023",
      link: "https://www.linkedin.com/learning/certificates/your-full-stack-cert"
    },
    {
      title: "Python",
      issuer: "Udemy",
      date: "July 2022",
      link: "https://drive.google.com/file/d/1dqS7Ul7Qr5Ed9XvXxl8Si1S-WPehnpi7/view?usp=sharing"
    },
    {
      title: "C Badge",
      issuer: "HackerRank",
      date: "April 2022",
      link: "https://www.hackerrank.com/certificates/your-c-badge"
    },
    {
      title: "Python Badge",
      issuer: "HackerRank",
      date: "July 2022",
      link: "https://www.hackerrank.com/certificates/your-python-badge"
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
