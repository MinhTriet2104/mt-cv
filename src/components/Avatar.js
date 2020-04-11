import React from "react";
import styled from "styled-components";

import AvatarImage from "../img/IMG_9881.JPG";

const Avatar = styled.div`
  background-image: url(${AvatarImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(30rem + 40px);
  margin: -20px 0;
  box-shadow: -3px -3px 7px #faffff, 3px 3px 7px #adbfd5;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 780px) {
    & {
      border-radius: 50%;
      height: 10rem;
      width: 10rem;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default () => <Avatar />;
