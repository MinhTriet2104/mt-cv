import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import Avatar from "../Avatar";
import Introduce from "../Introduce";

const Container = styled.div`
  margin: 5rem 100px 0;
  min-height: 30rem;
  background: transparent;
  box-shadow: inset -2px -2px 6px #faffff, inset 2px 2px 6px #adbfd5;
  border-radius: 5px;
  animation: fadeIn 0.5s ease-in;

  @media (max-width: 780px) {
    & {
      margin: 3rem 1.5em;
    }
  }
`;

const Home = () => (
  <Container>
    <div>
      <Row>
        <Col xl={8} md={24} sm={24}>
          <Avatar />
        </Col>
        <Col
          xl={16}
          md={24}
          sm={24}
          style={{ background: "transparent", padding: "1rem 3.2rem" }}
        >
          <Introduce />
        </Col>
      </Row>
    </div>
  </Container>
);

export default Home;
