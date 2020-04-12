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

const { Header, Footer } = Layout;
const App = () => (
  <Router>
    <Layout>
      <Header className="header" style={{ background: "transparent" }}>
        <Logo />
        <NavbarItems />
      </Header>
      <Switch>
        <Route exact path="/mt-cv/" component={Home} />
        <Route path="/mt-cv/about" component={About} />
        <Route path="/mt-cv/projects" component={Projects} />
      </Switch>

      <Footer
        style={{
          textAlign: "center",
          background: "transparent",
          fontSize: "1.2rem",
          padding: "2rem !important",
          lineHeight: "1.3em",
        }}
        className="footer"
      >
        Copyright &copy;2020 Created by Minh Triết
      </Footer>
    </Layout>
  </Router>
);

export default App;
