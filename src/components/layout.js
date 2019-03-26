import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  * {
     overflow: hidden;
  }

  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
`;

export default ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};