import React from "react";
import { portfolio } from "../../data";
import PortafolioItem from "../../components/PortafolioItem";
import './portafolio.css';

const Portafolio = () => {
  return (
    <section className="portafolio section">
      <h2 className="section__title">
        My <span>Portafolio</span>
      </h2>
      <div className="portafolio__container container grid">
        {
          portfolio.map((item) => {
            return <PortafolioItem key={item.id} {...item} />
          })
        }
      </div>
    </section>
  );
};

export default Portafolio;
