import React from "react";

export default ({ children, first }) => (
  <div
    style={{
      backgroundColor: "transparent",
      height: "3.4rem",
      width: "3.4rem",
      borderRadius: "50%",
      padding: "0.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "-5px -5px 15px #faffff, 5px 5px 15px #adbfd5",
      marginTop: "1rem",
      marginLeft: first ? 0 : "1rem"
    }}
  >
    <a href="#" style={{ backgroundColor: "transparent", fontSize: "1.7rem" }}>
      {children}
    </a>
  </div>
);
