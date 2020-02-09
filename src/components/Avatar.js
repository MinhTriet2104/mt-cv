import React from "react";

import AvatarImage from "../img/IMG_9881.JPG";

export default () => (
  <div
    style={{
      backgroundImage: `url(${AvatarImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "calc(30rem + 40px)",
      margin: "-20px 0",
      boxShadow: "-3px -3px 7px #faffff, 3px 3px 7px #adbfd5",
      borderRadius: "5px",
      overflow: "hidden"
    }}
  ></div>
);
