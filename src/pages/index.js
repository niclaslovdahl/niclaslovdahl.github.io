import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

const Main = styled.div`
  width: 85%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  margin: auto 0;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
`;

export default () => {
  return (
    <Main>
      <Wrapper>
        <GlobalStyle />
        <p>Hello world!</p>
      </Wrapper>
    </Main>
  );
};
