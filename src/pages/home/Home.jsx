import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { NavbarContext } from "../../context";
import { AnimatedSpan, HomeWrapper, Name, Position, TextContainer, SmallText, WavingHand, BackgroundEffect } from "./Home.styled";
import Img from "../../assets/mee.png";
import SmokeEffect from "../../components/SmokeEffect";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (text, animation) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`inline-block transform-style-3d origin-bottom ${animation}`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <HomeWrapper ref={ref} id="home-page">
      <BackgroundEffect />
      <TextContainer>
        <SmallText>
          Hi, my name is <WavingHand>👋</WavingHand>
        </SmallText>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", margin: "-1px" }}>
          <Name>Ardit Baskara</Name>
        </div>
        <Position>
          <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
            <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
              <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Full Stack Developer">
                {produceSpans("Full Stack Developer", "animate-textRotate1")}
              </div>
              <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="ML Engineer">
                {produceSpans("ML Engineer", "animate-textRotate2")}
              </div>
            </div>
          </div>
        </Position>
        <SocialIcons>
          <a
            href="https://www.linkedin.com/in/ardityabaskaramahbubi"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/ArditBaskara"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.instagram.com/ardit.baskara/"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </SocialIcons>
      </TextContainer>
      <SmokeEffect />
      <ResponsiveImage src={Img} alt="Ardit Baskara" />
    </HomeWrapper>
  );
};

// Styled Components for Responsive Image
const ResponsiveImage = styled.img`
  position: absolute;
  bottom: 1px;
  right: -22px;
  width: 500px;
  height: auto;
  z-index: 10;
  max-width: 100%; /* Ensures the image scales with screen size */
  margin: 0;

  @media (max-width: 768px) {
    width: 300px; /* Smaller width for tablet screens */
  }

  @media (max-width: 480px) {
    width: 200px; /* Even smaller width for mobile screens */
  }
`;

// Styled Components for Social Icons
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  a {
    color: #ffffff;
    font-size: 24px;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }

    .icon {
      transition: color 0.3s ease;
    }

    &:hover .icon {
      color: #0077b5; /* LinkedIn blue */
    }

    &:nth-child(2):hover .icon {
      color: #333; /* GitHub black */
    }

    &:nth-child(3):hover .icon {
      color: #e4405f; /* Instagram gradient red */
    }
  }

  @media (max-width: 768px) {
    gap: 30px;
    a {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;
    a {
      font-size: 18px;
    }
  }
`;
