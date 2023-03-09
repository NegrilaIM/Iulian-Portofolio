import React from "react";
import Card from "./Card";
import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills top" id="skills">
        <div className="container">
          <div className="heading">
            <h4>SKILLS</h4>
            <h1>Here are my skills</h1>
          </div>
          <div className="content grid">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
