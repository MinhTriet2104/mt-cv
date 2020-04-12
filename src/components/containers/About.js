import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import Texty from "rc-texty";

import "rc-texty/assets/index.css";

const Container = styled.div`
  margin: 3rem 100px 0;
  min-height: 30rem;
  background: transparent;
  box-shadow: inset -2px -2px 6px #faffff, inset 2px 2px 6px #adbfd5;
  border-radius: 5px;
  padding: 1.5em;

  @media (max-width: 780px) {
    & {
      margin: 3rem 1.5em;
    }
  }
`;

const About = () => {
  return (
    <Container>
      <h1
        style={{
          fontSize: "2rem",
          padding: "0 0.3rem",
          borderLeft: "5px solid #577eff",
          borderRadius: 0,
        }}
      >
        <Texty type="flash" duration="150">
          Programing Skills
        </Texty>
      </h1>
      <Bar
        height={60}
        width={190}
        data={{
          labels: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB", "MySQL"],
          datasets: [
            {
              label: "Skill",
              data: [95, 90, 95, 85, 80, 85],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 206, 86)",
                "rgb(153, 102, 255)",
                "rgb(75, 192, 192)",
                "#F29111",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 206, 86)",
                "rgb(153, 102, 255)",
                "rgb(75, 192, 192)",
                "#F29111",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel + "%";
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default About;
