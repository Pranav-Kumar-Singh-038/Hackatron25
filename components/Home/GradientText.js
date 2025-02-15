import React from "react";
import { TextContainer, WordGradient, VenueText, StyledButton, titleWords, cont, imga } from "./GradientTextStyles.js";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import styled, { keyframes } from "styled-components";




const GradientText = () => {
  return (
    <>

      <div style={{display:"flex", position: "absolute", padding: "0px 0px 400px 0px"}}>
        <div ><img className="HACK" src="images/arrow2.jpg" alt=""/></div>
        
        <div className="contimg" >
          <div className="imgaad" ><img className="imgaa" src="images/arrow.jpg" alt="" /></div>
        </div>
        
        <div ><img className="HACK" src="images/arrow 3.jpg" alt="" /></div>
      </div>
      <div style={{
        paddingTop: "170px"
      }}>
      <TextContainer>
        {titleWords.map((word, index) => (
          <WordGradient key={index} $startColor={word.startColor} $endColor={word.endColor} $delay={word.delay}>
            {word.text}
          </WordGradient>
        ))}
      </TextContainer>
      </div>

      <VenueText>
        BIT SINDRI-DHANBAD <br />
        JHARKHAND, INDIA
      </VenueText>
        
        
      <div className="RegBut" style={{textAlign: "center", marginTop: "25px", display: "flex"}}>
        <StyledButton>Register Now</StyledButton>
        <div className="Arrow">
          <img className ="imga" src="images/arrow.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default GradientText;
` `