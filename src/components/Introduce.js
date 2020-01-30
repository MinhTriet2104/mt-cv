import React from "react";
import { Icon } from "antd";
import styled, { keyframes } from "styled-components";
import { tada, rollIn, flipInX } from "react-animations";

import IconContainer from "./containers/IconContainer";

const fontFamily = "Work Sans, sans-serif";

const tadaAnimation = keyframes`${tada}`;
const rollInAnimation = keyframes`${rollIn}`;
const flipInXAnimation = keyframes`${flipInX}`;

const GreetingStyle = {
  fontSize: "4rem",
  marginTop: "4rem",
  fontWeight: "bold",
  fontFamily: fontFamily,
  marginBottom: 0,
  padding: 0
};

const highlight = {
  color: "#577eff",
  fontWeight: "bold",
  fontFamily: fontFamily
};

const Greeting = styled.h1`
  animation: 1s ${tadaAnimation} ease-in;
  animation-delay: 0.4s;
`;

const Job = styled.h2`
  margin-top: 0;
  animation: 1.5s ${flipInXAnimation} ease-in;
`;

const SocialContact = styled.div`
  animation: 1.2s ${rollInAnimation} ease-in;
`;

export default () => (
  <div>
    <Greeting style={GreetingStyle}>
      Hi, I'm <span style={highlight}>Minh Triết</span>{" "}
      <Icon type="message" theme="twoTone" twoToneColor="#7aa3ff" />
    </Greeting>

    <Job>
      I'm a <span style={highlight}>WEB DESIGN & DEVELOPMENT</span>
    </Job>

    <p style={{ marginTop: "0.5rem", fontWeight: "1.2rem" }}>
      I can design a website interface, build a complete website manage and
      develop it. If You want to make a website for anything, you come to the
      right place! Let me help you to bring your idea come True.
    </p>

    <div style={{ display: "flex", flexDirection: "row" }}>
      <SocialContact>
        <IconContainer first={true}>
          <Icon type="facebook" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer>
          <Icon type="twitter-square" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer>
          <Icon type="instagram" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer>
          <Icon type="linkedin" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer>
          <Icon type="github" theme="filled" />
        </IconContainer>
      </SocialContact>
    </div>
  </div>
);
