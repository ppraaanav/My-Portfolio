
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="about" 
      className="relative bg-secondary/50 dark:bg-secondary/10"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="section-title text-center mb-16">About Me</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-accent/20 rounded-full overflow-hidden border-4 border-accent/40 shadow-xl">
                  <img 
                    src="/lovable-uploads/45c54c34-93a7-43c3-b2de-2aba4ca60e3e.png" 
                    alt="Pranav  Gupta" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full border-2 border-accent/20 z-[-1]"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full border-2 border-accent/20 z-[-1]"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-5">
              <h3 className="text-2xl font-bold text-primary">Computer Science Engineer & Software Developer</h3>
              
              <p className="text-foreground/80">
                I'm Pranav Gupta, a Computer Science Engineer with a strong foundation in programming and software development. 
                I specialize in developing efficient algorithms and creating responsive applications using various programming languages 
                and frameworks.
              </p>
              
              <p className="text-foreground/80">
                With expertise in Java, C++, Python, and web development technologies, I focus on building solutions 
                that are not only functional but also user-friendly and scalable. My technical proficiency is complemented 
                by strong soft skills including teamwork, time management, and adaptability.
              </p>
              
              <p className="text-foreground/80">
                I am passionate about continuous learning and problem-solving, consistently seeking to enhance my skills and 
                stay updated with the latest technological advancements.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span><strong>Email:</strong> pranavgupta7754@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span><strong>Mobile:</strong> +91-6393419179</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span><strong>LinkedIn:</strong> linkedin.com/in/pranav--gupta/</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span><strong>GitHub:</strong> https://github.com/ppraaanav</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
