import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  background-color: transparent;
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -3px -3px 7px #faffff, 3px 3px 7px #adbfd5;
  margin-top: 1rem;

  &:hover {
    box-shadow: inset -2px -2px 6px #faffff, inset 2px 2px 6px #adbfd5;
  }
`;

export default ({ children, first }) => (
  <IconContainer
    style={{
      marginLeft: first ? 0 : "1rem"
    }}
  >
    <a href="#" style={{ backgroundColor: "transparent", fontSize: "1.7rem" }}>
      {children}
    </a>
  </IconContainer>
);
