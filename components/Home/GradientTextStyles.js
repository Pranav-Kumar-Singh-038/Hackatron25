import styled, { keyframes } from "styled-components";

// Gradient Animation Keyframes
const fadeEffect = keyframes`
    0%, 100% { opacity: 1; transform: translateY(0); }
    25% { opacity: 0.8; transform: translateY(-5px); }
    50% { opacity: 0.6; transform: translateY(-10px); }
    75% { opacity: 0.8; transform: translateY(-5px); }
`;

// Button Gradient Animation
const buttonAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;
// const arrowani = keyframes`
//     10%{
//         transform: translateY(7px);
//     }
// `;

// Color Palette for Theme Consistency
export const titleWords = [
  { text: "DESIGN.", startColor: "#A020F0", endColor: "#8A2BE2", delay: "0s" },
  { text: "DEBUG.", startColor: "#DDA0DD", endColor: "#FF00FF", delay: "2s" },
  { text: "DEPLOY.", startColor: "#8A2BE2", endColor: "#FF1493", delay: "4s" },
];

// Styled components for animated text
export const WordGradient = styled.span`
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, ${(props) => props.$startColor}, ${(props) => props.$endColor});
    font-size: 4.5rem;
    font-weight: 900;
    display: inline-block;
    margin: 0 10px;
    animation: ${fadeEffect} 6s infinite linear;
    animation-delay: ${(props) => props.$delay};

    @media (max-width: 1024px) {
        font-size: 3.8rem;
    }

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2.4rem;
        margin: 0 5px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    min-height: 100px;
    flex-wrap: wrap;
    text-align: center;
`;

// Styled Venue Text (BIT SINDRI-DHANBAD)
export const VenueText = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-top: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        font-size: 1.6rem;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

// Styled Button with Responsive Design
export const StyledButton = styled.button`
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

    @media (min-width: 1024px) {
        width: 370px;
        height: 65px;
        font-size: 1.7rem;
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

export const cont = styled.div`
    top: 5px;
    left: 5px;
    transform: translate(-5px, -5px);
`;

// export const imga=styled.img`
//     animation : ${arrowani} 3s easse out infinite
// `;