"use client";

import React, { useState, useEffect, useRef } from 'react';
import '../styles/skills.css';

interface SkillItem {
  name: string;
  level: number;
  description?: string;
}

interface SkillGroup {
  category: string;
  icon: string;
  items: SkillItem[];
}

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className={`skills-section ${isInView ? 'in-view' : ''}`}
    >
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((group, groupIndex) => (
          <div 
            key={group.category}
            className="skill-card"
            style={{ '--card-index': groupIndex } as React.CSSProperties}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{group.icon}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skill-list">
              {group.items.map((skill, skillIndex) => (
                <div 
                  key={skill.name}
                  className="skill-item"
                  style={{ '--item-index': skillIndex } as React.CSSProperties}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div 
                        className="skill-progress loaded"
                        style={{ '--progress-width': skill.level } as React.CSSProperties}
                      />
                    </div>
                  </div>
                  {skill.description && (
                    <div className="skill-description">
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 