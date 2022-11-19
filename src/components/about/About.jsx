import React from "react";
import "./About.css";
import ME from "../../assets/ME-About.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="ambience">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="profile" />
          </div>
        </div>

        <div className="about__content">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;I'm a Fullstack Web Developer, currently based in Jakarta,
            Indonesia. Back before I'm an English Language & Literature student
            and started my first job as a graphic design freelancer. I started learn coding
            from January 2022, I took fullstack web developer bootcamp at Binar
            Academy. I'm passionate about programming and design. I'm also
            curious learning about UI design.
            <br />
            <br />
            &nbsp;&nbsp;As a Fullsatck Web Developer, I'm very motivated to explore my
            capabilities by taking a new opportunity for my journey. My current stack is MERN (MongoDB, Express, ReactJS, Node) but I want to
            expand my skills more and learn something new. I also open for
            collaborating.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="blue__ambience" />
      </div>
    </section>
  );
};

export default About;
