import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-bottom: 1em;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()} Niclas Lövdahl.{" "}
        <Link
          href="https://github.com/niclaslovdahl/niclaslovdahl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </Link>
      </p>
    </StyledFooter>
  );
};

export default Footer;
