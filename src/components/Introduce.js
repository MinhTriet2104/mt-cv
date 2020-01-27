import React from "react";
import { Icon } from "antd";

import IconContainer from "./containers/IconContainer";

const fontFamily = "Work Sans, sans-serif";

const GreetingStyle = {
  fontSize: "4rem",
  marginTop: "4rem",
  fontWeight: "bold",
  fontFamily: fontFamily,
  marginBottom: 0
};

const highlight = {
  color: "#577eff",
  fontWeight: "bold",
  fontFamily: fontFamily
};

export default () => (
  <div>
    <h1 style={GreetingStyle}>
      Hi, I'm <span style={highlight}>Minh Triết</span>{" "}
      <Icon type="message" theme="twoTone" twoToneColor="#7aa3ff" />
    </h1>
    <h2 style={{ margin: 0 }}>
      I'm a <span style={highlight}>WEB DESIGN & DEVELOPMENT</span>
    </h2>
    <p style={{ marginTop: "0.5rem", fontWeight: "1.2rem" }}>
      I can design a website interface, build a complete website to manage and
      develop it. If You want to make a website for anything, you come to the
      right place! Let me help you to bring your idea come True.
    </p>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <IconContainer first={true}>
        <Icon type="facebook" theme="filled" />
      </IconContainer>
      <IconContainer>
        <Icon type="twitter-square" theme="filled" />
      </IconContainer>
      <IconContainer>
        <Icon type="instagram" theme="filled" />
      </IconContainer>
      <IconContainer>
        <Icon type="linkedin" theme="filled" />
      </IconContainer>
      <IconContainer>
        <Icon type="github" theme="filled" />
      </IconContainer>
    </div>
  </div>
);
