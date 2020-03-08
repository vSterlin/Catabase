import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Nav from "./Nav";
import Landing from "./Landing";

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    font-family: 'Pacifico', 'cursive';
  }
  body {
    background-color: black;
    height: 100vh;
  }
`;


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Landing />
    </>
  );
};

export default App;
