import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portafolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portafolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Denilson",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Prescott",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 Años",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Colombiano",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Disponible",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Valledupar, cesar",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+573003351185",
  },

  {
    id: 8,
    title: "Email : ",
    description: "denilpv22@gmail.com",
  },

  {
    id: 9,
    title: "GitHub : ",
    description: "Denilpv08",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Español",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Años de <br /> Experiencia",
  },

  {
    id: 2,
    no: "40+",
    title: "Proyectos <br /> Realizados",
  },

  {
    id: 3,
    no: "10+",
    title: "Clientes <br /> felices",
  },

  {
    id: 4,
    no: "3+",
    title: "Premios <br /> ganados",
  },
];

export const resume = [
  {
    id: 1,
    category: "experiencia",
    icon: <FaBriefcase />,
    year: "AGO 2022 - SEP 2022",
    title: "Proyectos <span> JavaScript </span>",
    desc: "Estuve realizando diversos proyectos en JavaScript con la finalidad de adquirir mucho más conocimiento, proyectos realizados fueron: Contador de actividades y juego de triki",
  },

  {
    id: 2,
    category: "experiencia",
    icon: <FaBriefcase />,
    year: "SEP 2022 - OCT 2022",
    title: "Proyecto <span> Laravel y React </span>",
    desc: "Realice un proyecto full-stack con laravel y react dándole  uso a un crud y login",
  },

  {
    id: 3,
    category: "experiencia",
    icon: <FaBriefcase />,
    year: "MAR 2023 - ABR 2023",
    title: "Proyecto <span> React y Node Js </span>",
    desc: "Proyecto MERN con MySql, react y node js. Donde el proyecto trata de generar un listado de tareas y haciendo su login",
  },

  {
    id: 4,
    category: "educación",
    icon: <FaGraduationCap />,
    year: "OCT 2020 - OCT 2022",
    title: "Tecnólogo Análisis y desarrollo de sistema de información <span> SENA </span>",
    desc: "Tecnólogo en el Sena basado en el análisis y desarrollo de aplicaciones web y de escritorio, donde también se le da manejo a las bases de datos",
  },

  {
    id: 5,
    category: "educación",
    icon: <FaGraduationCap />,
    year: "ENE 2018 - MAY 2018",
    title: "Mantenimiento de computadores <span> SENA </span>",
    desc: "Curso complementario en el Sena, para el mantenimiento de computo de manera preventiva y correctiva",
  },

  {
    id: 6,
    category: "educación",
    icon: <FaGraduationCap />,
    year: "MAR 2022 - MAY 2022",
    title: "Ejercicio derechos fundamentales en el trabajo <span> SENA </span>",
    desc: "Curso complementario para mejorar mis capacidades en el trabajo en equipo",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "25",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "69",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Laravel",
    percentage: "66",
  },

  {
    id: 5,
    title: "SQl Serve",
    percentage: "75",
  },

  {
    id: 6,
    title: "C#",
    percentage: "50",
  },

  {
    id: 7,
    title: "MySql",
    percentage: "65",
  },

  {
    id: 8,
    title: "React",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "App Movie",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Movie",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://denilpv-movie.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Crud Cars",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Cars",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Denilson",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Denilpv08/cars-crud",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Storage App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Storage",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, FireBase",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://denilpv-storage.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Kanban UI",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Kanban",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://denilpv-kanban.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Calculadora App",
    details: [
      {
        title: "Project : ",
        desc: "Calculadora",
      },
      {
        title: "Client : ",
        desc: "netlify",
      },
      {
        title: "Language : ",
        desc: "React JS"
      },
      {
        title: "Preview : ",
        desc: "https://denilpv-calculadora.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Store App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Store",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://denilpv-store.netlify.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
