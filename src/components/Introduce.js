import React from "react";
import { Icon } from "antd";
import TweenOne from "rc-tween-one";

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
    <TweenOne
      animation={{
        y: -100,
        opacity: 0,
        scale: 0.2,
        yoyo: true,
        duration: 500,
        repeat: 1
      }}
    >
      <h1 style={GreetingStyle}>
        Hi, I'm <span style={highlight}>Minh Triết</span>{" "}
        <Icon type="message" theme="twoTone" twoToneColor="#7aa3ff" />
      </h1>
    </TweenOne>

    <TweenOne
      animation={{
        y: -100,
        opacity: 0,
        scale: 0.2,
        yoyo: true,
        duration: 500,
        repeat: 1,
        delay: 50
      }}
    >
      <h2 style={{ margin: 0 }}>
        I'm a <span style={highlight}>WEB DESIGN & DEVELOPMENT</span>
      </h2>
    </TweenOne>

    <TweenOne
      animation={{
        x: -100,
        opacity: 0,
        scale: 0.2,
        yoyo: true,
        duration: 500,
        repeat: 1,
        delay: 100
      }}
    >
      <p style={{ marginTop: "0.5rem", fontWeight: "1.2rem" }}>
        I can design a website interface, build a complete website manage and
        develop it. If You want to make a website for anything, you come to the
        right place! Let me help you to bring your idea come True.
      </p>
    </TweenOne>

    <div style={{ display: "flex", flexDirection: "row" }}>
      <TweenOne
        animation={{
          y: 200,
          opacity: 0,
          scale: 0.5,
          yoyo: true,
          duration: 500,
          repeat: 1
        }}
      >
        <IconContainer first={true}>
          <Icon type="facebook" theme="filled" />
        </IconContainer>
      </TweenOne>

      <TweenOne
        animation={{
          y: 200,
          opacity: 0,
          scale: 0.5,
          yoyo: true,
          duration: 500,
          repeat: 1,
          delay: 50
        }}
      >
        <IconContainer>
          <Icon type="twitter-square" theme="filled" />
        </IconContainer>
      </TweenOne>

      <TweenOne
        animation={{
          y: 200,
          opacity: 0,
          scale: 0.5,
          yoyo: true,
          duration: 500,
          repeat: 1,
          delay: 100
        }}
      >
        <IconContainer>
          <Icon type="instagram" theme="filled" />
        </IconContainer>
      </TweenOne>

      <TweenOne
        animation={{
          y: 200,
          opacity: 0,
          scale: 0.5,
          yoyo: true,
          duration: 500,
          repeat: 1,
          delay: 150
        }}
      >
        <IconContainer>
          <Icon type="linkedin" theme="filled" />
        </IconContainer>
      </TweenOne>

      <TweenOne
        animation={{
          y: 200,
          opacity: 0,
          scale: 0.5,
          yoyo: true,
          duration: 500,
          repeat: 1,
          delay: 200
        }}
      >
        <IconContainer>
          <Icon type="github" theme="filled" />
        </IconContainer>
      </TweenOne>
    </div>
  </div>
);
