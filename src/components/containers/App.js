import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import NavbarItems from "../NavbarItems";
import Logo from "../Logo";

import "antd/dist/antd.css";
import "../styles/App.css";

const ContentStyle = {
  margin: "5rem 50px 0",
  height: "30rem",
  boxShadow: "-5px -5px 15px #faffff, 5px 5px 15px #adbfd5",
  background: "transparent",
  borderRadius: "5px"
};

const { Header, Content, Footer } = Layout;
const App = () => (
  <Router>
    <Layout>
      <Header className="header" style={{ background: "transparent" }}>
        <Logo />
        <NavbarItems />
      </Header>
      <Content style={ContentStyle} className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "transparent",
          fontSize: "1.2rem",
          marginTop: "3rem"
        }}
        className="footer"
      >
        Copyright &copy;2020 Created by Minh Triết
      </Footer>
    </Layout>
  </Router>
);

export default App;
