import React from "react";
import "./Portfolio.css";
import porto from "../../porto";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {porto.map(({ id, image, title, icon, link }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>Technologies</h4>
              <div className="portfolio__technologies">
                {icon}
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Take a look
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
