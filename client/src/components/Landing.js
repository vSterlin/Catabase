import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DelayTransition from "./DelayTransition";

const AppWrapper = styled.div`
@keyframes moveUp {
    from {
      transform: translateY(0);    }
    to {
      transform: translateY(-100vh);
    }
  }
  /* @keyframes moveRight {
    from {

      margin-left: 0;
    }
    to {
      margin-left: 1000px;
    }
  } */
  ${({delayTime, isLeaving}) => isLeaving === true ? (`animation: moveUp ${delayTime}s linear;`) : ""}
  

`;

const Hee = styled.div`
  margin: 0 auto;
  
  padding-top: 35vh;
  text-align: center;

  

`;

const Text = styled.h2`
  color: white;
`;

const buttonSize = 80;
const buttonColor = "#4dff4d";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const Button = styled.button`
  height: ${buttonSize / 2}px;
  width: ${buttonSize}px;
  margin: 0 1%;
  font-size: 20px;
  border-style: none;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  color: ${props => (props.color === buttonColor ? "white" : "black")};
  outline: none;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Landing = props => {


  const { delayTime, redirectWithDelay } = props;
  const [leaving, useLeaving] = useState(false);

  
  return (
    <AppWrapper delayTime={delayTime} isLeaving={leaving}>
      <Hee>
        <Text>
          Find your <Underline>perfect</Underline> breed of cat from all of the{" "}
          <Underline>wonderful</Underline> breeds!
        </Text>
        <ButtonWrapper>
          <Link to="/lol">
            <Button>Light</Button>
          </Link>
          <Button
            color={buttonColor}
            onClick={() => {
              useLeaving(true);
              localStorage.setItem("hasVisited", true);
              redirectWithDelay(delayTime*1000, "/");
            }}
          >
            Success
          </Button>
        </ButtonWrapper>
      </Hee>
    </AppWrapper>
  );
};

export default DelayTransition(Landing);
