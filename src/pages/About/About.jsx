import React from "react";
import aboutImage from "../../assets/dit.png";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { useScroll } from "../../components/useScroll";
import { portfolioAnimation } from "../../components/animations";
import { Page } from "../../components/Page";
import { white, blue, typeScale } from "../../utils";
import { Button } from "../../components/form";
import { AiOutlineDownload } from "react-icons/ai";

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export default function About() {
  const [element, controls] = useScroll();

  const aboutDetails = [
    {
      title: "Skills",
      details: [
        "Full Stack Developer",
        "System Integration",
        "Machine Learning",
        "IoT",
        "Computer Vision"
      ],
    },
    {
      title: "Tech Stack",
      details: [
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Firebase",
        "MongoDB",
        "C",
        "Python",
        "Node-red",
        "Docker",
        "MQTT",
        "Javascript/Typescript"
      ],
    },
  ];

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Page header="About me" />
      <Heading
        as={motion.h2}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        It's just ardit being ardit
      </Heading>

      <Section ref={element}>
        <AboutContent
          variants={portfolioAnimation}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <ImageContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ProfileImage
              src={aboutImage}
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </ImageContainer>

          <ContentCard
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Description>
              Sophomore at <Highlight>Universitas Pendidikan Indonesia</Highlight>, I am driven by{" "}
              <Highlight>curiosity</Highlight>, <Highlight>innovation</Highlight>, and a desire to make a{" "}
              <Highlight>meaningful impact</Highlight>. My passion lies in exploring how{" "}
              <Highlight>technology</Highlight>, particularly <Highlight>artificial intelligence</Highlight>, can provide{" "}
              <Highlight>solutions</Highlight> to various aspects of life. I am especially interested in implementing{" "}
              <Highlight>AI in software development</Highlight> and creating{" "}
              <Highlight>IoT systems</Highlight> powered by <Highlight>machine learning</Highlight>. I thrive on{" "}
              <Highlight>challenges</Highlight> that push me to learn and grow, and I am eager to work on projects that allow me to apply my{" "}
              <Highlight>skills</Highlight> and knowledge in <Highlight>innovative ways</Highlight>.
            </Description>

            <ResumeLink
              href="https://drive.google.com/file/d/180yZ9cVMyNrkYIC3LKAR2jUexleUduT6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton bg={blue} tooltip="Download Resume">
                <AiOutlineDownload size={24} />
                <span>Resume</span>
              </DownloadButton>
            </ResumeLink>
          </ContentCard>
        </AboutContent>

        <CardsContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aboutDetails.map((detail, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <CardHeader>{detail.title}</CardHeader>
              <SkillList>
                {detail.details.map((subDetail, subIndex) => (
                  <SkillItem
                    key={subIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + subIndex * 0.05 }}
                  >
                    <SkillDot />
                    {subDetail}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </CardsContainer>
      </Section>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(20, 20, 20, 1) 50%,
    rgb(0, 0, 0) 100%
  );

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const Heading = styled.h2`
  color: ${blue[60]};
  text-align: center;
  font-size: ${typeScale.text};
  margin-bottom: 2rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: ${typeScale.subtitle};
    margin-bottom: 3rem;
  }
`;

const Section = styled(motion.section)`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 1rem;

  @media (min-width: 768px) {
    gap: 4rem;
    padding: 2rem;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
`;

const ProfileImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(66, 162, 253, 0.3);
  border: 4px solid ${blue[60]};
  transition: all 0.4s ease;
  filter: grayscale(20%);

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
    box-shadow: 0 12px 48px rgba(66, 162, 253, 0.5);
    border-color: ${blue[70]};
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

const ContentCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(20, 49, 76, 0.6) 0%,
    rgba(26, 65, 101, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border: 2px solid ${blue[40]};
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${blue[60]};
    box-shadow: 0 12px 48px rgba(66, 162, 253, 0.2);
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const Description = styled.p`
  color: ${white[10]};
  font-size: ${typeScale.paragraph};
  line-height: 1.8;
  margin: 0 0 2rem 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: ${typeScale.text};
    line-height: 2;
  }
`;

const Highlight = styled.span`
  color: ${blue[70]};
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${blue[90]};
  }
`;

const ResumeLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;

const DownloadButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  font-size: ${typeScale.paragraph};
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  background: ${blue[60]};
  color: ${white["00"]};
  border: 2px solid ${blue[60]};

  &:hover {
    background: ${blue[70]};
    border-color: ${blue[70]};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(66, 162, 253, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: ${typeScale.text};
  }
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${blue[20]} 0%,
    ${blue[30]} 100%
  );
  border: 3px solid ${blue[60]};
  border-radius: 1.25rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  box-shadow: 0.5rem 0.5rem 0 ${blue[10]};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      135deg,
      ${blue[30]} 0%,
      ${blue[40]} 100%
    );
    box-shadow: 0.75rem 0.75rem 0 ${blue[20]};
    border-color: ${blue[70]};
  }

  @media (min-width: 768px) {
    width: calc(50% - 1.25rem);
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

const CardHeader = styled.h3`
  color: ${white["00"]};
  font-size: ${typeScale.subtitle};
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 3px solid ${blue[70]};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: ${typeScale.title};
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkillItem = styled(motion.li)`
  color: ${white[10]};
  font-size: ${typeScale.paragraph};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(66, 162, 253, 0.1);
    transform: translateX(5px);
  }

  @media (min-width: 768px) {
    font-size: ${typeScale.text};
  }
`;

const SkillDot = styled.span`
  width: 8px;
  height: 8px;
  background: ${blue[70]};
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px ${blue[70]};
`;
