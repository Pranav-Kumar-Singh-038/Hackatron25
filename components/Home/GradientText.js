import React from "react";
import { TextContainer, WordGradient, VenueText, StyledButton, titleWords, cont, imga } from "./GradientTextStyles.js";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import styled, { keyframes } from "styled-components";
// import RegisterSection from "./RegisterSection.js";




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

     
        
      {/* <RegisterSection/> */}
    </>
  );
};

export default GradientText;
` `