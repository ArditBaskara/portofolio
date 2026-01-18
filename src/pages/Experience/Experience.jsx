import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Page } from "../../components/Page";
import { experiences } from "../../data/experiences";
import { SectionWrapper } from "../../components/hoc";
import { textVariant } from "../../utils/motion";
import { blue, typeScale } from "../../utils";

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
  gap: 2rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 3rem;
    gap: 3rem;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  z-index: 10;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  cursor: pointer;
  padding: 1rem 1.5rem;
  position: relative;
  text-align: center;
  background: ${(props) => (props.isActive ? "#e0f7fa" : "#ffffff")};
  border-radius: 0.75rem;
  transition: all 0.3s ease-in-out;
  flex: 0 1 auto;
  min-width: 200px;

  /* Filter out isActive and isMobile from props to avoid warnings */
  ${props => {
    const { isActive, isMobile, ...restProps } = props;
    return restProps;
  }}

  &:hover {
    background: #e5e7eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 1.25rem 2rem;
    min-width: 250px;
  }
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.25rem;
  background: #14b8a6;
  border-radius: 0.25rem 0.25rem 0 0;
  display: block;

  @media (min-width: 768px) {
    height: 0.375rem;
  }
`;

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#14b8a6" : "#475569")};
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const Company = styled.p`
  font-size: 0.75rem;
  padding-top: 0.25rem;
  color: ${(props) => (props.isActive ? "#14b8a6" : "#64748b")};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const Details = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  justify-content: center;

  ul {
    width: 100%;
    list-style: none;
    padding: 2rem;
    border: 0.5rem solid #1e293b;
    border-radius: 1rem;
    margin: 0;
    text-align: left;

    li {
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 1rem;
      line-height: 1.6;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }
`;
