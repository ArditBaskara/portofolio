import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaJava, FaAndroid, FaWindows
} from "react-icons/fa";
import {
  SiArduino, SiKotlin, SiNpm, SiMongodb, SiMysql, SiFigma, SiAdobepremierepro
} from "react-icons/si";
import { useIsMobile } from "../hooks/useIsMobile";
import "./SmokeEffect.css"

const icons = [
  FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  SiArduino, FaAndroid, FaJava, SiKotlin, SiNpm,
  SiMongodb, SiMysql, FaWindows, SiFigma, SiAdobepremierepro
];

const SmokeEffect = () => {
  const { isMobile } = useIsMobile();
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);  // Bergantian setiap 2 detik
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(-20px)" },
    reset: true,  // Mengatur animasi untuk diulang setiap ikon baru
    config: { duration: 1000 },
  });

  const Icon = icons[currentIcon];

  return (
    <div className={`smoke-effect ${isMobile ? "mobile" : ""}`}>
      <animated.div style={props} className="icon">
        <Icon size={isMobile ? 20 : 30} />
      </animated.div>
    </div>
  );
};

export default SmokeEffect;
