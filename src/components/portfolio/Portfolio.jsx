import React from "react";
import "./portfolio.css";
import Simon from "../../assets/Simon.png";
import Music from "../../assets/music app.png";
import List from "../../assets/todolist.png";

const data = [
  {
    id: 1,
    image: Simon,
    title: "Simon Memory Game",
    github: "https://github.com/C3-PIO/Simon-Game",
    demo: "https://c3-pio.github.io/Simon-Game/",
  },
  {
    id: 2,
    image: Music,
    title: "Music Search App",
    github: "https://github.com/C3-PIO/Music-App",
    demo: "https://music-hl0j35him-c3-pio.vercel.app/",
  },
  {
    id: 3,
    image: List,
    title: "To Do List",
    github: "https://github.com/C3-PIO/ToDoListBE",
    demo: "https://to-do-app-lyxw.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">GitHub</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
