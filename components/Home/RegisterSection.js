import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the arrow
const arrowAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(7px); }
    100% { transform: translateY(0); }
`;

// Button Gradient Animation
const buttonAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

// Styled Button Component
const StyledButton = styled.button`
    position: relative;
    width: 280px;
    height: 64px;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    border-radius: 12px;
    background: linear-gradient(-45deg, #A020F0, #8A2BE2, #DDA0DD, #FF00FF);
    background-size: 300% 300%;
    animation: ${buttonAnimation} 4s ease infinite;
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 25px rgba(255, 20, 147, 0.9);
    }

    @media (max-width: 1024px) {
        width: 240px;
        height: 58px;
        font-size: 1.3rem;
    }

    @media (max-width: 768px) {
        width: 220px;
        height: 54px;
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 50px;
        font-size: 1.1rem;
    }
`;

// Styled Container for Button & Arrow
const RegisterContainer = styled.div`
    text-align: center;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

// Styled Arrow Image
const ArrowImage = styled.img`
    width: 50px;
    height: auto;
    animation: ${arrowAnimation} 1.5s ease-in-out infinite;
`;

const RegisterSection = () => {
  return (
    <RegisterContainer>
      <StyledButton>Register Now</StyledButton>
      <ArrowImage src="images/arrow.png" alt="Arrow" />
    </RegisterContainer>
  );
};

export default RegisterSection;
