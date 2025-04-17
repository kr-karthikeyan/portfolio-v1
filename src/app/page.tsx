"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import "../styles/animations.css";
import Image from "next/image";
import Link from "next/link";

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

// Skills data
const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express", "Django", "SQL"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  },
  {
    category: "Design",
    items: ["UI/UX", "Figma", "Responsive Design", "CSS Animations", "SASS"]
  },
  {
    category: "Other",
    items: ["RESTful APIs", "GraphQL", "WebSockets", "Testing", "Agile"]
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
      <section id="skills" className="section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="contact" className="section">
        <div className="section-container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <a href="mailto:your.email@example.com" className="contact-email">
              your.email@example.com
            </a>
            <div className="social-links">
              <a href="https://github.com/yourusername" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="social-link">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" className="social-link">
                Twitter
              </a>
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
              <div className="popup-animation">
                <div className="popup-animated-shape" />
                <div className="popup-animated-shape" />
                <div className="popup-animated-shape" />
              </div>
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
