import React from "react";
import { Card } from "antd";
import styled from "styled-components";

import "./styles/Card.css";

const CardStyle = {
  boxShadow: "-5px -5px 15px #faffff, 5px 5px 15px #adbfd5",
  textAlign: "center"
};

const Title = styled.a`
  font-size: 1.4rem;
  color: #4e413b;

  &:hover {
    color: #5d13e7 !important;
  }
`;

export default ({ projectSrc, imgSrc, title }) => (
  <a href={projectSrc} target="blank">
    <Card
      hoverable
      style={CardStyle}
      cover={<img style={{ height: "17rem" }} alt="imgShowcase" src={imgSrc} />}
    >
      <Title href={projectSrc} target="blank">
        {title}
      </Title>
    </Card>
  </a>
);
