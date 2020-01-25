import React from "react";
import { Row, Col } from "antd";

import Avatar from "../Avatar";
import Introduce from "../Introduce";

const Home = () => (
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
);

export default Home;
