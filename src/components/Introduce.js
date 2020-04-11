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
  fontSize: "4.5rem",
  fontWeight: "bold",
  fontFamily: fontFamily,
  marginBottom: 0,
  padding: 0,
};

const highlight = {
  color: "#577eff",
  fontWeight: "bold",
  fontFamily: fontFamily,
};

const Greeting = styled.h1`
  animation: 1s ${tadaAnimation} ease-in;
  animation-delay: 0.4s;

  @media (max-width: 780px) {
    & {
      font-size: 2.3em !important;
    }
  }
`;

const Job = styled.h2`
  margin-top: 0;
  animation: 1.5s ${flipInXAnimation} ease-in;

  @media (max-width: 780px) {
    & {
      font-size: 1.3em !important;
    }
  }
`;

const SocialContact = styled.div`
  animation: 1.2s ${rollInAnimation} ease-in;
`;

export default () => (
  <div style={{ padding: "4.2rem 0" }}>
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
        <IconContainer
          first={true}
          url="https://www.facebook.com/minhtriet.nguyen.1481"
        >
          <Icon type="facebook" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer>
          <Icon type="twitter-square" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer url="https://www.instagram.com/hi_am_triet/">
          <Icon type="instagram" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer url="https://www.linkedin.com/in/tri%E1%BA%BFt-it-538b28197/">
          <Icon type="linkedin" theme="filled" />
        </IconContainer>
      </SocialContact>

      <SocialContact>
        <IconContainer url="https://github.com/MinhTriet2104">
          <Icon type="github" theme="filled" />
        </IconContainer>
      </SocialContact>
    </div>
  </div>
);
