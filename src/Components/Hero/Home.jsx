import React from "react";
import "./Home.css";
import me from "../../Assets/me.png";
import skill1 from "../../Assets/JAVASCRIPT.png";
import skill2 from "../../Assets/REACT.png";
import skill3 from "../../Assets/VUE.png";

import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY PORTOFOLIO</h3>
            <h1>
              Hi, I'm <span>Negrila Iulian</span>
            </h1>
            <h2>
              a{" "}
              <span>
                <Typewriter
                  words={["Frontend Developer", "Professional Coder"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p>
              "Just don t give up trying to do what you really want to do. Where
              there is love and inspiration, I don t think you can go wrong"
            </p>
            <br />
            <p>
            - Hi there! I'm a passionate Frontend Developer with over 3 years of experience, specializing in building interactive and efficient web interfaces. With a strong background in technologies like React, Redux, HTML, CSS, and Hooks, I've created complex, scalable, and user-friendly applications.
            <br />- I've worked extensively with libraries such as Bootstrap, Tailwind, and Material UI, bringing modern and intuitive designs to my projects. My approach is rooted in using best practices to develop user-friendly and easily understandable interfaces.
            <br />- I'm always seeking new challenges and learning new technologies to enhance my skills. I'm a dedicated team player with meticulous attention to detail and a passion for creating innovative web experiences. I'm open to new opportunities for growth and collaboration.
            <br />- Let's work together to create captivating and successful web products!
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>YOU CAN FIND ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
