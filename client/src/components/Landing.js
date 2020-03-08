import React from 'react'

import styled from "styled-components";

import img from "../images/cat1.jpg";

const AppWrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hee = styled.div`
  margin: 0 auto;
  padding-top: 33vh;
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
  background-color: ${({color}) => color};
  color: ${props => props.color === buttonColor ? "white" : "black"};
  outline: none;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Landing = () => {
  return (
<AppWrapper>
      
        <Hee>
          <Text>
            Find your <Underline>perfect</Underline> breed of cat from all of
            the <Underline>wonderful</Underline> breeds!
          </Text>
          <ButtonWrapper>
            <Button>
              Light
            </Button>
            <Button color={buttonColor}>
              Success
            </Button>
          </ButtonWrapper>
        </Hee>
      </AppWrapper>
  )
}

export default Landing
