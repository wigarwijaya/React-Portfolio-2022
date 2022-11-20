import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="ambience">
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Education</h3>
            <div className="education__content">
              <article className="education__details">
                  <h4>Binar Academy</h4>
                  <small className="text-light">Fullstack Web Dev ∙ Wave 19 2022</small>
              </article>
              <article className="education__details">
                  <h4>Brawijaya University</h4>
                  <small className="text-light">English Language & Literature ∙ 2011 - 2016</small>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Courses</h3>
            <div className="course__content">
              <article className="course__details">
                  <h4>UDEMY</h4>
                  <small className="text-light">The Complete 2022 Web Development Bootcamp</small>
              </article>
            </div>
          </div>
        </div>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Express</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PostgreSQL</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="pink__ambience" />
        <div className="white__ambience" />
      </div>
    </section>
  );
};

export default Experience;
