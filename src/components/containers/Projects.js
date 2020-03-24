import React from "react";
import { Row, Col, Icon } from "antd";
import styled from "styled-components";

import ProjectShowcase from "../ProjectShowcase";

import FlappyBirdImg from "../../img/FlappyBird.PNG";
import Game2048Img from "../../img/Game2048.PNG";
import TypingGameImg from "../../img/TypingGame.PNG";
import SnakeGameImg from "../../img/SnakeGame.PNG";
import TodoListImg from "../../img/TodoList.PNG";
import MyCVImg from "../../img/MyCV.PNG";
import PhpNewsImg from "../../img/PhpNewspaper.png";
import LaravelNewsImg from "../../img/LaravelNews.png";
import TodoListReduxImg from "../../img/TodoListRedux.png";

const Container = styled.div`
  margin: 3rem 100px 0;
  min-height: 30rem;
  background: transparent;
`;

const Category = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 0.7rem;
  padding: 0 0.3rem;
  border-left: 5px solid #577eff;
  border-bottom: 2px solid #577eff;
  border-radius: 0;
  display: inline-block;
`;

const Projects = () => (
  <Container>
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#577eff",
        margin: 0,
        marginBottom: "1rem"
      }}
    >
      <Icon type="code" theme="twoTone" twoToneColor="#577eff" /> My Projects
    </h1>
    <Category>JavaScript Games</Category>
    <Row gutter={{ lg: 48, md: 32 }}>
      <Col className="gutter-row" xl={6} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://flappy-bird-2020.web.app/"
          imgSrc={FlappyBirdImg}
          title="Game Flappy Bird"
        />
      </Col>
      <Col className="gutter-row" xl={6} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://game2048-2020.web.app/"
          imgSrc={Game2048Img}
          title="Game 2048"
        />
      </Col>
      <Col className="gutter-row" xl={6} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://typingpracticegame.web.app/"
          imgSrc={TypingGameImg}
          title="Typing Game"
        />
      </Col>
      <Col className="gutter-row" xl={6} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://codepen.io/minhtriet2104/project/full/AVbLBP"
          imgSrc={SnakeGameImg}
          title="Snake Game"
        />
      </Col>
    </Row>
    <Category style={{ marginTop: "3.5rem" }}>React App</Category>
    <Row gutter={{ lg: 48, md: 32 }}>
      <Col className="gutter-row" xl={8} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://first-firebase-react-deploy.firebaseapp.com/"
          imgSrc={TodoListImg}
          title="Todo List"
        />
      </Col>
      <Col className="gutter-row" xl={8} md={8} sm={24}>
        <ProjectShowcase
          projectSrc=""
          imgSrc={TodoListReduxImg}
          title="Todo List using Redux"
        />
      </Col>
      <Col className="gutter-row" xl={8} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="https://minhtriet2104.github.io/mt-cv/"
          imgSrc={MyCVImg}
          title="My CV"
        />
      </Col>
    </Row>
    <Category style={{ marginTop: "3.5rem" }}>PHP & Laravel</Category>
    <Row gutter={{ lg: 64, md: 48 }}>
      <Col className="gutter-row" xl={8} md={8} sm={24}>
        <ProjectShowcase
          projectSrc="http://callie.epizy.com/"
          imgSrc={PhpNewsImg}
          title="Online News with PHP"
        />
      </Col>
      <Col className="gutter-row" xl={10} md={10} sm={24}>
        <ProjectShowcase
          projectSrc="https://callie-laravel.herokuapp.com/"
          imgSrc={LaravelNewsImg}
          title="Online News with Laravel"
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;
