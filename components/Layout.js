import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./Header";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const ContentWrapper = styled.div`
  display: grid;
  max-width: 45em;
  width: 80%;
  margin-left: 10%;
`;

const GlobalStyle = createGlobalStyle`
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    /* &:visited {
      margin-right: 1em;
      color: #1dc121;
    } */
    &:hover {
      outline: 1px solid white;
    }
  }
  html {
    box-sizing: border-box;
  }  
  *,*:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 16px;
    color: white;
    margin:0;
    padding:0;
    background: #000;
    font-family: Consolas, 'Courier New', Courier, monospace;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  h2 {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
`;
const Layout = props => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{props.children}</ContentWrapper>

      <GlobalStyle />
    </Wrapper>
  );
};

export default Layout;
