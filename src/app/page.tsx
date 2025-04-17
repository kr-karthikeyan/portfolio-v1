"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import "../styles/animations.css";
import Image from "next/image";
import Link from "next/link";
import { SkillsSection } from '@/components/SkillsSection';

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1 and its key features. This project demonstrates my skills in web development and problem-solving abilities.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/project1.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1-demo.com"
  },
  {
    title: "Project 2",
    description: "Description of project 2, showcasing different aspects of my development skills and technical expertise.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL"],
    imageUrl: "/images/project2.jpg",
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2-demo.com"
  },
  {
    title: "Project 3",
    description: "Overview of project 3, highlighting its unique features and the technologies used in its development.",
    technologies: ["Vue.js", "Express", "Redis"],
    imageUrl: "/images/project3.jpg",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3-demo.com"
  }
];

// Skills data with icons and descriptions
const skills = [
  {
    category: "Frontend",
    icon: "💻",
    items: [
      { name: "React", level: 90, description: "Building modern, responsive UIs with React and Next.js" },
      { name: "Next.js", level: 85, description: "Server-side rendering and static site generation" },
      { name: "TypeScript", level: 80, description: "Type-safe development with TypeScript" },
      { name: "HTML/CSS", level: 95, description: "Semantic HTML and modern CSS techniques" },
      { name: "JavaScript", level: 90, description: "ES6+ features and modern JavaScript patterns" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85, description: "Building scalable server applications" },
      { name: "Python", level: 80, description: "Data processing and automation scripts" },
      { name: "Express", level: 85, description: "RESTful API development" },
      { name: "Django", level: 75, description: "Full-stack Python web development" },
      { name: "SQL", level: 80, description: "Database design and optimization" }
    ]
  },
  {
    category: "Database",
    icon: "🗄️",
    items: [
      { name: "MongoDB", level: 85, description: "NoSQL database design and optimization" },
      { name: "PostgreSQL", level: 80, description: "Relational database management" },
      { name: "MySQL", level: 75, description: "Database administration and queries" },
      { name: "Redis", level: 70, description: "Caching and real-time data handling" },
      { name: "Firebase", level: 80, description: "Real-time database and authentication" }
    ]
  },
  {
    category: "DevOps",
    icon: "🚀",
    items: [
      { name: "Git", level: 90, description: "Version control and collaboration" },
      { name: "Docker", level: 75, description: "Containerization and deployment" },
      { name: "AWS", level: 70, description: "Cloud infrastructure management" },
      { name: "CI/CD", level: 75, description: "Automated testing and deployment" },
      { name: "Linux", level: 80, description: "Server administration and shell scripting" }
    ]
  },
  {
    category: "Design",
    icon: "🎨",
    items: [
      { name: "UI/UX", level: 85, description: "User-centered design principles" },
      { name: "Figma", level: 80, description: "Prototyping and design systems" },
      { name: "Responsive Design", level: 90, description: "Mobile-first approach" },
      { name: "CSS Animations", level: 85, description: "Interactive animations and transitions" },
      { name: "SASS", level: 80, description: "Advanced CSS preprocessing" }
    ]
  },
  {
    category: "Other",
    icon: "🛠️",
    items: [
      { name: "RESTful APIs", level: 90, description: "API design and implementation" },
      { name: "GraphQL", level: 75, description: "Graph-based query language" },
      { name: "WebSockets", level: 70, description: "Real-time communication" },
      { name: "Testing", level: 80, description: "Unit and integration testing" },
      { name: "Agile", level: 85, description: "Agile methodologies and Scrum" }
    ]
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <main className="main">
      <Navigation />
      
      {/* Background Animation */}
      <div className="background-animation">
        <div className="animated-circle" />
        <div className="animated-circle" />
        <div className="animated-circle" />
      </div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-animation">
          <div className="animated-shape" />
          <div className="animated-shape" />
          <div className="animated-shape" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Karthik</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="button-group">
            <Link href="#projects" className="button button-primary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="profile-animation">
              <div className="profile-avatar">
                <div className="avatar-circle" />
                <div className="avatar-details" />
              </div>
            </div>
            <div className="about-content">
              <p>
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                I love creating beautiful and functional user interfaces while ensuring robust backend functionality.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I strive to create
                seamless user experiences while ensuring robust and scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card hover-card"
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const name = document.getElementById('name') as HTMLInputElement;
                const email = document.getElementById('email') as HTMLInputElement;
                const message = document.getElementById('message') as HTMLTextAreaElement;
                
                const mailtoLink = `mailto:your.email@example.com?subject=Contact from ${name.value}&body=${message.value}%0D%0A%0D%0AFrom: ${name.value}%0D%0AEmail: ${email.value}`;
                window.location.href = mailtoLink;
              }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="submit-icon">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Popup */}
      {selectedProject && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleClosePopup}>×</button>
            <div className="popup-image">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                width={800}
                height={600}
              />
            </div>
            <div className="popup-details">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="popup-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="popup-links">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-link"
                >
                  View Project
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
