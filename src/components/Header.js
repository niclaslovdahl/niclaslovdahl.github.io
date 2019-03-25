import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h4>Niclas Lövdahl</h4>
    </StyledHeader>
  );
};

export default Header;
