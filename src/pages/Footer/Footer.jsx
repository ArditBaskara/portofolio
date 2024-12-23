import React from "react";
import styled from "styled-components";
import { blue, typeScale } from "../../utils";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  font-size: ${typeScale.copyrightText};
  width: 100%;
  text-align: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 1) 50%, rgba(0, 0, 0, 1) 100%);
  /* Tidak ada position fixed, footer akan muncul di bawah konten */
`;

const FooterText = styled.p`
  margin: 0;
  color: ${blue[100]};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        👋 Thanks for visiting! <br />
        designed & Built by Ardit Baskara <br />
        credit to Teshank Raut & forestKnight
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
