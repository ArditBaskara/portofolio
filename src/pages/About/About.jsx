import React from "react";
import aboutImage from "../../assets/dit.png";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { useScroll } from "../../components/useScroll";
import { testimonialsAnimation, portfolioAnimation } from "../../components/animations";
import { Page } from "../../components/Page";
import { white,blue, typeScale } from "../../utils";
import { Button } from "../../components/form";
import {   AiOutlineDownload } from "react-icons/ai";


export const DownloadButton = styled(Button)`
  gap: 1rem;
  height: 50px;
  width: 100px;

  @media screen and (max-width: 720px) {
    height: 45px;
  }
`;
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

export default function About() {
  const [element, controls] = useScroll();

  const aboutDetails = [
    {
      title: "Skills",
      details: ["Full Stack Developer", "Android Development", "Machine Learning", "IoT"],
    },
    {
      title: "Tech",
      details: ["ReactJS", "Node.js", "HTML", "CSS", "Firebase", "MongoDB", "C++", "Python"],
    },
  ];

  return (
    <Container       
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
      <Page header="About me"></Page>
      <Heading 
        as={motion.h2}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
          It's just ardit being ardit</Heading>
      <Section ref={element}>
        <motion.div
          className="about"
          variants={portfolioAnimation}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
        <motion.div
            className="image-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <div className="image-wrapper">
            <motion.img
              src={aboutImage}
              alt="Profile"
              className="profile-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          </motion.div>
          <motion.div
            className="content"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
             <h2>
              Sophomore at <span style={{ color: "#87CEEB" }}>Universitas Pendidikan Indonesia</span>, I am driven by{" "}
              <span style={{ color: "#87CEEB" }}>curiosity</span>, <span style={{ color: "#87CEEB" }}>innovation</span>, and a desire to make a{" "}
              <span style={{ color: "#87CEEB" }}>meaningful impact</span>. My passion lies in exploring how{" "}
              <span style={{ color: "#87CEEB" }}>technology</span>, particularly <span style={{ color: "#87CEEB" }}>artificial intelligence</span>, can provide{" "}
              <span style={{ color: "#87CEEB" }}>solutions</span> to various aspects of life. I am especially interested in implementing{" "}
              <span style={{ color: "#87CEEB" }}>AI in software development</span> and creating{" "}
              <span style={{ color: "#87CEEB" }}>IoT systems</span> powered by <span style={{ color: "#87CEEB" }}>machine learning</span>. I thrive on{" "}
              <span style={{ color: "#87CEEB" }}>challenges</span> that push me to learn and grow, and I am eager to work on projects that allow me to apply my{" "}
              <span style={{ color: "#87CEEB" }}>skills</span> and knowledge in <span style={{ color: "#87CEEB" }}>innovative ways</span>.
            </h2>
            <a
              href="https://drive.google.com/file/d/180yZ9cVMyNrkYIC3LKAR2jUexleUduT6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton bg={blue} tooltip="Download">
                <AiOutlineDownload size={40} />
                <span>Resume</span>
              </DownloadButton>
            </a>
        </motion.div>
        </motion.div>
        <motion.div
          className="cards-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {aboutDetails.map((detail, index) => (
            <Card key={index}>
              <h3>{detail.title}</h3>
              <ul>
                {detail.details.map((subDetail, subIndex) => (
                  <li key={subIndex}>{subDetail}</li>
                ))}
              </ul>
            </Card>
          ))}
        </motion.div>
      </Section>
    </Container>
  );
}
const Heading = styled.h2`
  color: ${blue[60]} ;
  text-align: center;
  font-size: ${typeScale.copyrightText};
  @media (min-width: 768px) {
    font-size: ${typeScale.text};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 1) 50%, rgb(0, 0, 0) 100%);
`;

const Section = styled(motion.section)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 1;

  .about {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .content {
    color: white;
    text-align: left;
    display: grid;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(53, 51, 51, 0.7), rgba(58, 211, 235, 0.52));
    border-radius: 1rem;
    max-width: 800px;

    h2 {
      font-size: ${typeScale.paragraph};
      line-height: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }
  }

.cards-container {
  display: flex; /* Menggunakan Flexbox */
  flex-wrap: wrap; /* Memungkinkan elemen membungkus ke baris baru */
  justify-content: center; /* Memusatkan card secara horizontal */
  gap: 2rem; /* Memberikan jarak antar card */
  margin-top: 2rem;

  @media screen and (max-width: 992px) {
    gap: 1.5rem; /* Mengurangi jarak antar card pada layar yang lebih kecil */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Membuat card tampil dalam satu kolom */
    align-items: center; /* Memusatkan setiap card di tengah */
    gap: 1rem; /* Jarak antar card lebih kecil */
  }
}

.image-wrapper {
  max-width: 300px;
  margin: 2rem auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: ${fadeInScale} 1s ease-in-out;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  /* Efek ketika gambar tidak ditunjuk kursor */
  filter: grayscale(100%) brightness(0.6); /* Mengatur gambar menjadi abu-abu */
  transform: scale(0.95); /* Membuat gambar sedikit mengecil */

  &:hover {
    filter: grayscale(0%) brightness(1); /* Mengembalikan warna asli */
    transform: scale(1.1); /* Membuat efek timbul */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6); /* Bayangan lebih besar */
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
}
`;

const Card = styled.div`
  overflow: hidden;
  background-color: ${(props) =>
    props.color ? props.color["60"] : blue["60"]};
  color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
  box-shadow: 0.8rem 0.8rem 0
    ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border-radius: 1rem;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  h3 {
    color: ${white[20]};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: ${typeScale.text};
    background-color: rgba(27, 113, 110, 0.8);
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  ul {
    font-size: ${typeScale.paragraph};
    list-style: none;
    padding: 0;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, #56ccf2, #2f80ed);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;