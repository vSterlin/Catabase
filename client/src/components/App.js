import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

import history from "../history";

import Nav from "./Nav";
import Landing from "./Landing";
import CatList from "./CatList";

import img from "../images/cat1.jpg";

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    font-family: 'Pacifico', 'cursive';
  }
  body {
    background-color: black;
    height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});

    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  }
`;


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Route exact path="/" render={() => <Landing delayTime="0.5" />} />

      <Route exact path="/temp" render={() => <CatList delayTime="1005" />} />
    </>
  );
};

export default App;
