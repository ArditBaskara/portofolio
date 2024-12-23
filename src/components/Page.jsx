import React from "react";
import styled from "styled-components";
import { Grid, PageHeader } from "./ui"; // Assuming PageHeader is imported from your custom UI components

const StyledLayout = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    padding-inline-start: 1rem;
    .bg-text {
      font-size: 5.5rem;
    }
  }
`;

const CustomHeader = styled(PageHeader)`
  font-size: 3rem;
  font-weight: bold;
  color: #ff5722; /* A vibrant color for header text */
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  padding: 1rem;
  background: linear-gradient(90deg, rgba(255, 87, 34, 1) 0%, rgba(255, 193, 7, 1) 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
const OverlayContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; /* Lebih tinggi dari konten default */
  background: rgba(0, 0, 0, 0.7); /* Efek overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

export const Page = ({ children, header, overlay }) => {
  return (
    <StyledLayout id={`${header.toLowerCase()}-page`}>
      <>
        <CustomHeader>{header.toUpperCase()}</CustomHeader>
        {overlay && <OverlayContent>{overlay}</OverlayContent>}
        {children}
      </>
    </StyledLayout>
  );
};
