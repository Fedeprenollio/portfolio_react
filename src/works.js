import { SiRedux } from "react-icons/si";

export const works = [
  {
    id: 1,
    name: "ServiceCar",
    info: "Proyecto individual para practicar conceptos varios",
    detail: [
      [
        `Simple app que nos permite gestionar los service de nuestros vehiculos. He usado Vite para inicializar React. El back es con Node.js/Express, la base de datos con MongoDB Atlas. Tiene login con Google. He usado bootstrap, formik, sweetalert2 entre otras tecnologias.`,
      ],
      [
        ` Como usarla: Luego de crear nuestra cuenta y hacer login, podremos cargar nuestro vehiculos, agrerle services por hacer o realizados, filtrar los services y eliminarlos entre otras funciones.`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://service-car.vercel.app/login"],
    github: [
      [
        "bi bi-github",
        "Front",
        "https://github.com/Fedeprenollio/front_serviceCar",
      ],
      [
        "bi bi-github",
        "Back",
        "https://github.com/Fedeprenollio/back-serviceCars",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/service/listarAutos_dihesy.png",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/service/nuevoAuto_mat0n5.png",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/service/listaService_ny49ii.png",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/service/nuevoService_dvyspm.png",
    ],
    tecno: [
      ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      ["MongoDb", "SiMongodb"],
      ["Express"],
    ],
    hability: [
      "Render.com (deploy back) y Vercel",
      "Estados globales con react / Contex",
      "Login con Google",
      "Bootstrap",
      "SweetAlert 2",
    ],
  },
  {
    id: 2,
    name: "Poke App",
    info: `Proyecto individual realizado en bootcamp "SoyHenry"`,
    detail: [
      [
        `Primera app que he desarrollado partiendo desde el backend, la base de dato y el frontend. He utilizado Sequalize, Express, Redux, React entre otras tecnologias`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://pi-pokemones.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/PI-Pokemones",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/pokemon_qigmis.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022608/porfolio/pokeApp-home_pr2p9f.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022608/porfolio/pokeApp-createPoke_gr0yv0.jpg",
    ],
    tecno: [
      ["Node", "fa-brands fa-node"],
      // ["React", "fa-brands fa-react"],
      // ["MongoDb", "fas fa-database"],
      ["Sequelize", "fas fa-database"],
      ["Redux", "SiRedux"],
      //SiRedux
      ["Express"],
    ],
    hability: [
      "Heroku y Vercel",
      "Axios (get, post, delete)",
      "Dotenv",
      "Comandos basicos de git",
    ],
  },
  {
    id: 3,
    name: "React Rick y Morty",
    info: `App utilizando la API de Rick y Morty`,
    detail: [[`App de Rick y Morty con filtros para sus personajes`]],
    link: ["bi bi-browser-chrome", "https://rick-morty-swart.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/rick-morty",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022606/porfolio/rick/Home_on2fnv.png",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668709820/porfolio/rick/Sin_t%C3%ADtulo_iomgwn.png",
    ],
    tecno: [
      // ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      // ["Express"],
    ],
    hability: [
      "Heroku y Vercel",
      "Axios (get, post, delete)",
      "Dotenv",
      "Comandos basicos de git",
    ],
  },
  {
    id: 4,
    name: "Traductor ",
    info: `App utilizando la API de traducción. En caso de no responder, utilizar la otra`,
    detail: [
      [
        `App para traducir textos, ademas ofrece la posibilidad de escuchar la traducción. También autedecta el idioma de origen`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://traductor-original.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/traductor",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022607/porfolio/traductor/Home_ihltzv.png",
    ],
    tecno: [
      // ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      // ["Express"],
    ],
    hability: ["Css", "Bootstrap", "SweetAlert 2"],
  },
  {
    id: 5,
    name: "Traductor (Segunda versión) ",
    info: `App utilizando otra API de traducción ya que la primera suele tener peticiones limitadas y problemas. Ésta no tiene detectado automatico de idioma de origen`,
    detail: [
      [
        `App para traducir textos, ademas ofrece la posibilidad de escuchar la traducción. Ésta API carece  autedecta el idioma de origen`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://traductor-psi.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/traductor",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022607/porfolio/traductor/Home_ihltzv.png",
    ],
    tecno: [
      // ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      // ["Express"],
    ],
    hability: ["Css", "Bootstrap", "SweetAlert 2"],
  },
  {
    id: 6,
    name: "Calculadora",
    info: `Calculadora Javascript`,
    detail: [
      [`Ésta calculadora se puede usar tanto con mouse como con el teclado`],
    ],
    link: ["bi bi-browser-chrome", "https://calculadora-murex.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/calculadora",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/calculadora/calculadora_vtqxim.png",
    ],
    tecno: [
      // ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      // ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      // ["Express"],
    ],
    hability: ["Css", "API context de react"],
  },
  {
    id: 7,
    name: "Chat con socket.io",
    info: `Conociendo Socket.io`,
    detail: [
      [
        `Pequeña app donde se puede chatear entre todos los usuarios que tengan el link de la app`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://chat-socket-v2.herokuapp.com/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/chatSocket2",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/chat-socket.io/inicial_h0vmvu.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/chat-socket.io/chat_ps92wm.jpg",
    ],
    tecno: [
      ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      // ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      ["Socket.io"],
      ["Express"],
    ],
    hability: ["Uso de morgan", "Importancia de Cors", "Heroku"],
  },
  {
    id: 8,
    name: "App de notas",
    info: `Pequeño proyecto para tomar contacto con MongoDB`,
    detail: [
      [
        `Pequeña app donde se puede chatear entre todos los usuarios que tengan el link de la app`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://notes-app-fawn-five.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "front",
        "https://github.com/Fedeprenollio/notesApp-Front",
      ],
      [
        "bi bi-github",
        "back",
        "https://github.com/Fedeprenollio/notesApp-Back",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/notas-mongo/notes_tufzhq.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/notas-mongo/users_sp0iyj.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/notas-mongo/newNote_s9gvkx.jpg",
    ],
    tecno: [
      ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      // ["Api externa", "TbApi"],
      ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],
      //SiRedux
      // ["Socket.io"],
      ["Express"],
    ],
    hability: ["Uso de morgan", "Importancia de Cors", "Heroku"],
  },
  {
    id: 9,
    name: "E-commerce",
    info: `Proyecto grupal realizado en bootcamp "SoyHenry"    `,
    detail: [
      [
        `E-comercce realizado grupalmente, donde yo me enfoqué mayormente en el frontend, realizando la estructura y logica de los paneles de administrador. En la misma podras crear una cuenta con tu email o mediante Google, recibiendo un email de bienvenida, simular compras con tarjeta de credito. Administrar la pagina si cuentas con los permisos, entre otras funcionalidades.`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://final-project-beryl.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/Final-Project",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022605/porfolio/mine/logueo_xevmow.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/mine/registro_dppcmc.jpg",
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1668022604/porfolio/mine/administrador_b7odzr.jpg",
    ],
    tecno: [
      ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      ["Sequelize", "fas fa-database"],
      ["Redux", "SiRedux"],

      // ["Socket.io"],
      ["Express"],
    ],
    hability: ["Material Ui", "Yup", "Formik", "SweetAlert", "Heroku"],
  },
  {
    id: 10,
    name: "Reloj con datos del clima",
    info: `Proyecto que permite ver la hora según tu ubicación con los datos del clima en tiempo real y buscar la hora de otra ciudad también con su datos meteorológicos y el mapa de la ubicacíon.`,
    detail: [
      [
        `La app te pedira permisos para saber tu ubicación y te dará información del clima actual y su mapa. También tiene un buscador de otras ciudades. Si la hora en otros paises difiere a la real es por la información que brinda la API puediendo ser inexacta`,
      ],
    ],
    link: ["bi bi-browser-chrome", "https://reloj-clima.vercel.app/"],
    github: [
      [
        "bi bi-github",
        "proyecto",
        "https://github.com/Fedeprenollio/reloj_clima",
      ],
    ],
    img: [
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1670263058/porfolio/reloj%2Bclima/imagen_m06te0.png",
      
      "https://res.cloudinary.com/dewegl2jr/image/upload/v1670264113/imagen2_bj3xbl.png",
      
    ],
    tecno: [
      // ["Node", "fa-brands fa-node"],
      ["React", "fa-brands fa-react"],
      [`"OpenWeatherMap"`, "TbApi"],
      // ["Api externa", "TbApi"],
      // ["MongoDb", "fas fa-database"],
      // ["Sequelize", "fas fa-database"],
      // ["Redux", "SiRedux"],

      // ["Socket.io"],
      // ["Express"],
    ],
    hability: ["Css", "Manejo de setInterval y fechas", "Inseción de mapas."  ],
  },
];
