import React from "react";
import { Layout, Row, Col } from "antd";

import Avatar from "../Avatar";
import Introduce from "../Introduce";

const ContentStyle = {
  margin: "5rem 100px 0",
  height: "30rem",
  boxShadow: "-5px -5px 15px #faffff, 5px 5px 15px #adbfd5",
  background: "transparent",
  borderRadius: "5px",
  animation: "fadeIn 0.5s ease-in"
};

const { Content } = Layout;

const Home = () => (
  <Content style={ContentStyle}>
    <div>
      <Row>
        <Col span={8}>
          <Avatar />
        </Col>
        <Col
          span={16}
          style={{ background: "transparent", padding: "1rem 3.2rem" }}
        >
          <Introduce />
        </Col>
      </Row>
    </div>
  </Content>
);

export default Home;
