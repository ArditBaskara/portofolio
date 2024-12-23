import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Page } from "../../components/Page";
import { experiences } from "../../data/experiences";
import { SectionWrapper } from "../../components/hoc";
import { textVariant } from "../../utils/motion";
import { blue , typeScale } from "../../utils";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <Card onClick={onClick} isActive={isActive} isMobile={isMobile}>
      {(isActive || isMobile) && <Indicator />}
      <Title isActive={isActive || isMobile}>{experience.title}</Title>
      <Company isActive={isActive || isMobile}>
        {experience.company_name} | {experience.date}
      </Company>
    </Card>
  );
};

const ExperienceDetails = ({ experience }) => (
  <Details>
    <ul>
      {experience.details.map((detail, index) => (
        <li
          key={`experience-detail-${index}`}
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      ))}
    </ul>
  </Details>
);

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <motion.div variants={textVariant()}>
        <Page header="experience"></Page>
        <Heading>what I've been up to</Heading>
      </motion.div>
      <Content>
        <CardList>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </CardList>

        {!isMobile && <ExperienceDetails experience={selectedJob} />}
      </Content>
    </Container>
  );
};

export default SectionWrapper(Experience, "portfolio");

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(20, 20, 20, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  margin: 0; /* Hilangkan margin bawaan */
  padding: 0; /* Hilangkan padding bawaan */

  @media (min-width: 640px) {
    padding: 2rem; /* Tambahkan padding hanya jika diperlukan */
  }
`;

const Heading = styled.h2`
  color: ${blue[60]} ;
  text-align: center;
  font-size: ${typeScale.copyrightText};
  @media (min-width: 768px) {
    font-size: ${typeScale.text};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${typeScale.paragraph};
  gap: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 5rem;
    font-size: ${typeScale.paragraph};
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100%;


  @media (min-width: 640px) {
    width: auto;
  }
`;

const Card = styled.div`
  cursor: pointer;
  margin-bottom: 1.25rem;
  padding: 1.25rem;
  max-width: 36rem;
  position: relative;
  text-align: ${(props) => (props.isMobile ? "center" : "left")};
  background: ${(props) => (props.isActive ? "#e0f7fa" : "#ffffff")};
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  /* Filter out isActive and isMobile from props to avoid warnings */
  ${props => {
    const { isActive, isMobile, ...restProps } = props; 
    return restProps; 
  }}

  &:hover {
    background: ${(props) => (props.isMobile ? "#f9fafb" : "#e5e7eb")};
  }
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.75rem;
  background: #14b8a6;
  margin: 1.5rem;
  display: block;

  @media (min-width: 768px) {
    width: 1.25rem;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  padding-left: 2rem;
  color: ${(props) => (props.isActive ? "#14b8a6" : "#475569")};

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`;

const Company = styled.p`
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-left: 2rem;
  color: ${(props) => (props.isActive ? "#14b8a6" : "#475569")};

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Details = styled.div`
  ul {
    max-width: 60rem;
    list-style: none;
    padding: 1rem;
    border: 0.5rem solid #1e293b;
    border-radius: 1rem;

    li {
      font-size: 0.625rem;
      font-weight: 600;
      color: #64748b;

      @media (min-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }
`;
