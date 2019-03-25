import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Wrapper = styled.div`
  margin: auto 0;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;

export default () => {
  return (
    <Layout>
      <Wrapper>
        <p>Hello world!</p>
      </Wrapper>
    </Layout>
  );
};
