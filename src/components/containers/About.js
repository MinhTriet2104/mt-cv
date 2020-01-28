import React from "react";
import { Bar } from "react-chartjs-2";
import Texty from "rc-texty";

import "rc-texty/assets/index.css";

const About = () => {
  return (
    <div style={{ padding: "1rem 1.5rem" }}>
      <h1
        style={{
          fontSize: "2rem",
          padding: "0 0.3rem",
          borderLeft: "5px solid #577eff",
          borderRadius: 0
        }}
      >
        <Texty type="flash" duration="150">
          Programing Skills
        </Texty>
      </h1>
      <Bar
        height="60"
        width="200"
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
                "#F29111"
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 206, 86)",
                "rgb(153, 102, 255)",
                "rgb(75, 192, 192)",
                "#F29111"
              ],
              borderWidth: 1
            }
          ]
        }}
        options={{
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel + "%";
              }
            }
          }
        }}
      />
    </div>
  );
};

export default About;
