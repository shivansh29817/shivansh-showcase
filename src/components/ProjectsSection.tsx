import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and user management features.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "🛍️"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "Redux", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "📋"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "API Integration", "CSS3", "Geolocation"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "🌤️"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "💼"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management, charts, and market analysis tools.",
      technologies: ["React", "API Integration", "Chart.js", "Local Storage"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "💰"
    },
    {
      title: "Social Media Dashboard",
      description: "A social media management dashboard with content scheduling, analytics, and multi-platform integration.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "📱"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projectCards = projectsRef.current?.children;

    if (!section || !title || !projectCards) return;

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

    gsap.fromTo(projectCards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-0">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;