import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Page } from "../../components/Page";
import { FaFolder } from 'react-icons/fa';
import { blue, typeScale } from "../../utils";
import { projectData } from '../../data/project';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projectData : projectData.slice(0, 8);

  return (
    <Section id="projects">
      <Page header="Projects"></Page>
      <Heading>things I've built</Heading>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="project-header">
              <FaFolder className="folder-icon" />
              <motion.h3>{project.title}</motion.h3>
            </motion.div>
            <motion.p className="project-description">
              {project.description}
            </motion.p>
            <motion.div className="project-tech">
              {project.tech.map((tech, idx) => (
                <motion.span key={idx} className="tech-tag">
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Open Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {projectData.length > 6 && (
        <motion.div className="load-more" variants={itemVariants}>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Load More'}
          </button>
        </motion.div>
      )}
    </Section>
  );
};

const Heading = styled.h2`
  color: ${blue[60]} ;
  text-align: center;
  font-size: ${typeScale.copyrightText};
  @media (min-width: 768px) {
    font-size: ${typeScale.text};
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 1) 50%, rgba(0, 0, 0, 1) 100%);
  color: #c9d1d9;

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .project-card {
    background: #161b22;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .project-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;

      h3 {
        font-size: 1.25rem;
        color: #58a6ff;
      }

      .folder-icon {
        font-size: 1.5rem;
        color: #58a6ff;
      }
    }

    .project-description {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: #8b949e;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tech-tag {
        background: #21262d;
        color: #c9d1d9;
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
      }
    }

    .project-link {
      margin-top: 1rem;

      a {
        color: #58a6ff;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;

        &:hover {
          color: #2ea043;
        }
      }
    }
  }

  .load-more {
    text-align: center;
    margin-top: 2rem;

    button {
      background-color:rgb(80, 176, 216);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color:rgb(15, 192, 159);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .projects-container {
      grid-template-columns: 1fr;
    }

    .project-card {
      padding: 1rem;

      .project-header h3 {
        font-size: 1rem;
      }

      .project-description {
        font-size: 0.875rem;
      }

      .project-tech .tech-tag {
        font-size: 0.75rem;
      }

      .project-link a {
        font-size: 0.875rem;
      }
    }

    .load-more button {
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    .project-card {
      padding: 0.75rem;

      .project-header h3 {
        font-size: 0.9rem;
      }

      .project-description {
        font-size: 0.8rem;
      }

      .project-tech .tech-tag {
        font-size: 0.7rem;
      }

      .project-link a {
        font-size: 0.8rem;
      }
    }

    .load-more button {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

export default Projects;
