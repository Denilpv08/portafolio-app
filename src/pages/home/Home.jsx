import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Yo soy Denilson Prescott.</span> Desarrollador de Software
          </h1>
          <p className="home__description">
            Soy un apasionado de los desafíos que trae la innovación y un
            tecnólogo en análisis y desarrollo de sistema de información
            titulado, PERFIL sin experiencia laboral. Empecé a programar cuando
            estaba en la secundaria y empezaba a emprender haciendo variedades
            de proyectos individuales y en conjunto para adquirir conocimiento.
          </p>
          <Link to="/about" className="button">
            {" "}
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
