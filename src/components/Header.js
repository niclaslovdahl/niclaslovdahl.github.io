import React from "react";
import styled from "styled-components";
import IconLinks from "./IconLinks";

const StyledHeader = styled.header`
  display: flex;
  color: black;
  padding-top: 1em;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav``;

const Header = () => {
  return (
    <StyledHeader>
      <h3>Niclas Lövdahl</h3>
      <Nav>
        <IconLinks />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
