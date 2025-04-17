import { useEffect } from 'react';
import '../styles/projectPopup.css';

interface ProjectPopupProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
  };
  onClose: () => void;
}

const ProjectPopup = ({ project, onClose }: ProjectPopupProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="popup-image">
          <img src={project.imageUrl} alt={project.title} />
          <div className="popup-overlay">
            <div className="popup-animated-shape"></div>
            <div className="popup-animated-shape"></div>
            <div className="popup-animated-shape"></div>
          </div>
        </div>
        <div className="popup-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="popup-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="popup-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="popup-link">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="popup-link">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup; 