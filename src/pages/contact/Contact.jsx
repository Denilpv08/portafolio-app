import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">¡No seas tímido!</h3>
          <p className="contact__description">
            No dude en ponerse en contacto conmigo. Siempre estoy abierto a
            discutir nuevos proyectos, ideas creativas u oportunidades para ser
            parte de sus visiones.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Escribeme</span>
                <h4 className="info__desc">denilpv22@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Llámame</span>
                <h4 className="info__desc">+573003351185</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.instagram.com/denilson_prescott/?hl=es"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/denilson-yusep-prescott-viloria-11a09a206/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Denilpv08"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://denilpv-portafolio-react.netlify.app/"
              className="contact__social-link"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Tu Correo"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Tu Asunto"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Tu Mensaje"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Mesage
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
