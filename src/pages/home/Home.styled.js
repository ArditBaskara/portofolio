import styled, { keyframes } from "styled-components";
import { PageHeaderStyled } from "../../components/ui/index.js";
import { blue, green, typeScale } from "../../utils/index.js";

export const HomeWrapper = styled.main`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  position: relative;
  overflow: hidden;
  padding: 1rem;

  @media screen and (max-width: 920px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    padding: 1rem;
    height: auto; /* Fix height issue on mobile */
  }

  @media screen and (max-width: 480px) {
    grid-gap: 0.5rem; /* Reduce grid gap for smaller screens */
  }
`;

// Waving hand animation
const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

export const WavingHand = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

// Background effect styling
export const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 1) 50%, rgba(0, 0, 0, 1) 100%);
  z-index: -1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const TextContainer = styled.section`
  grid-column: 2 / 8;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem; /* Move text lower */
  padding: 1rem;

  @media screen and (max-width: 1204px) {
    gap: 2.5rem;
  }

  @media screen and (max-width: 920px) {
    grid-column: 1 / 13;
    align-self: center;
    padding-inline: 1rem;
    justify-self: center;
    margin-top: 2rem; /* Adjust for smaller screens */
  }

  @media screen and (max-width: 480px) {
    gap: 1.5rem;
    padding: 1rem;
    margin-top: 1.5rem; /* Reduce margin for very small screens */
  }
`;

// Small text style
export const SmallText = styled.h1`
  font-size: ${typeScale.title};
  margin: 0.5rem 0 0 0.4rem;
  display: block;

  @media screen and (max-width: 920px) {
    font-size: ${typeScale.subtitle};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.text};
    text-align: center;
    line-height: 1.2; /* Improve readability on small screens */ /* Adjust for smaller screens */
  }
`;

// Name text style with gradient effect
export const Name = styled.h1`
  font-size: ${typeScale.bigDisplay};
  font-weight: bolder;
  margin: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 0.9;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;

  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.display};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.headline};
    text-align: center;
    line-height: 1.2; /* Improve readability on small screens */
  }
`;

// Rotate animation for position
const textRotate1 = keyframes`
  0% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  40% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  60% { transform: translate3d(0, -100%, 0) rotateX(-90deg); }
  100% { transform: translate3d(0, -100%, 0) rotateX(-90deg); }
`;

const textRotate2 = keyframes`
  0% { transform: translate3d(0, 100%, 0) rotateX(-90deg); }
  40% { transform: translate3d(0, 100%, 0) rotateX(-90deg); }
  60% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  100% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
`;

export const Position = styled(PageHeaderStyled)`
  background: unset;
  line-height: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  margin-block: 0;
  margin-inline: 0;
  margin-top: 0.5rem;
  padding: 0;
  position: relative;
  color: ${blue["50"]};
  cursor: default;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
      animation: ${textRotate1} 2.4s infinite alternate;
    }

    &.second {
      color: ${green["80"]};
      position: absolute;
      top: 2%;
      left: 0;

      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    margin-top: 0.25rem;
    justify-content: center;
    align-items: center;

    .text {
      span {
        font-size: 0.8rem;
      }

      &.second {
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        span {
          transform: translate3d(0, 50%, 0) rotateX(-45deg);
        }
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 0;
    justify-content: center;
    align-items: flex-start;

    .text {
      span {
        font-size: 0.6rem;
      }

      &.second {
        top: 2%;
        left: 50%;
        transform: translateX(-50%);
        span {
          transform: translate3d(0, 25%, 0) rotateX(-30deg);
        }
      }
    }
  }
`;


export const AnimatedSpan = styled.span`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
  font-size: inherit;

  @media screen and (max-width: 480px) {
    padding: 0.5rem; /* Adjust padding for better fit on small screens */
  }
`;
