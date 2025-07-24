import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5", level: 98, icon: "🔥" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 92, icon: "💨" }
      ]
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "GSAP", level: 85, icon: "🎬" },
        { name: "Git", level: 90, icon: "🐙" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Vite", level: 88, icon: "⚡" },
        { name: "Figma", level: 85, icon: "🎯" },
        { name: "Redux", level: 87, icon: "🔄" }
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const skillBars = document.querySelectorAll('.skill-bar');

    if (!section || !title) return;

    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    skillBars.forEach((bar, index) => {
      const progressBar = bar.querySelector('.progress-fill') as HTMLElement;
      const level = parseInt(bar.getAttribute('data-level') || '0');
      
      gsap.fromTo(progressBar,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-bar"
                    data-level={skill.level}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="h-3 bg-border rounded-full overflow-hidden">
                      <div 
                        className="progress-fill h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and exploring new technologies to stay up-to-date 
            with the latest trends in web development and deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;