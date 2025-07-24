import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content || !image) return;

    gsap.fromTo(content,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
        }
      }
    );

    gsap.fromTo(image,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Frontend Developer with a keen eye for design and 
                a love for creating seamless user experiences. With expertise in 
                modern web technologies, I transform ideas into interactive digital solutions.
              </p>
              
              <p>
                My journey in web development started with curiosity and has evolved 
                into a commitment to crafting clean, efficient code and beautiful interfaces. 
                I specialize in React, TypeScript, and modern CSS frameworks.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Experience</h3>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Projects</h3>
                <p className="text-muted-foreground">50+ Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Clients</h3>
                <p className="text-muted-foreground">25+ Happy</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Coffee</h3>
                <p className="text-muted-foreground">∞ Cups</p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="card-elevated rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl gradient-text font-bold">SM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;