import React from "react";
import { Card } from "antd";
import styled from "styled-components";

import "./styles/Card.css";

const CardStyle = {
  boxShadow: "-2px -2px 6px #faffff, 2px 2px 6px #adbfd5",
  textAlign: "center",
  border: "none !important",
};

const Wrapper = styled.a`
  display: inline-block;

  // @media (max-width: 780px) {
  //   & {
  //     margin-top: 2em;
  //   }
  // }
`;

const Title = styled.a`
  font-size: 1.4rem;
  color: #4e413b;

  &:hover {
    color: #5d13e7 !important;
  }
`;

export default ({ projectSrc, imgSrc, title }) => (
  <Wrapper href={projectSrc} target="blank">
    <Card
      hoverable
      style={CardStyle}
      cover={<img style={{ height: "17rem" }} alt="imgShowcase" src={imgSrc} />}
    >
      <Title href={projectSrc} target="blank">
        {title}
      </Title>
    </Card>
  </Wrapper>
);
