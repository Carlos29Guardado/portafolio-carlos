import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alejandro Múnez — Mobile & Web Developer",
  author: "Alejandro Múnez Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlos Manuel Guardado",
    specialty: "Full Stack Developer Junior",
    summary: "Estudiante de Ingeniería en Sistemas con experiencia en el ciclo completo de desarrollo y despliegue de aplicaciones web. Especializado en crear interfaces dinámicas, gestionar bases de datos y orquestar arquitecturas en la nube.",
    email: "cmgd292005@gmail.com",
  },
  experience: [
    {
      company: "Iglesia Comunitaria (Proyecto Independiente",
      position: "Desarrollador Android Nativo",
      startDate: "2024",
      endDate: "2026",
      summary: [
        "Diseño y desarrollo de una aplicación móvil nativa en Java para digitalizar el registro y control logístico de alcancías de la comunidad.",
        "Implementación de persistencia de datos local utilizando SQLite, optimizando la gestión y resguardo de los registros.",
        "Configuración de túneles de red con ngrok para habilitar la comunicación y sincronización de datos de la app con un servidor local."
      ],
    },
    {
      company: "Proyecto Sismo SV",
      position: "Especialista en Despliegue Web",
      startDate: "Junio 2026",
      endDate: "Agosto 2026",
      summary: [
       "Responsable de la configuración y paso a producción de la plataforma web Sismos SV.",
        "Ejecución del despliegue exitoso tanto del frontend como del backend, garantizando la correcta comunicación y funcionamiento de ambos entornos en la web."
      ],
    },

  ],
  projects: [
    {
      name: "Proyecto 1: JuegosCentral",
      summary: "Interfaz responsiva de gestión de productos con operaciones CRUD completas manipulando el DOM. Desarrollado nativamente con HTML5, CSS3 y Vanilla JavaScript.",
      linkPreview: "https://proyecto-juego-central.vercel.app/dashboard.html",
      linkSource: "https://github.com/Carlos29Guardado/Proyecto-JuegoCentral.git",
      image: "/JuegosCentral.png",
    },
    {
      name: "Sistema de Inventario MERN",
      summary: "Plataforma Full-Stack para gestión de libros. Desarrollada con React.js en el frontend y Node.js/Express en el backend, con persistencia en MongoDB Atlas y autenticación JWT.",
      linkPreview: "https://libreria-web-proyecto.vercel.app/",
      linkSource: "https://github.com/Carlos29Guardado/Librer-a-Web-Proyecto.git",
      image: "/shopify-clon.png",
    },
    {
      name: "Control de Alcancías (Android Nativo)",
      summary: "Aplicación móvil nativa para Android construida con Java y SQLite. Permite la recolección en campo, almacenamiento local y sincronización de datos con servidor mediante ngrok.",
      linkPreview: "https://appetize.io/app/b_rgdn5imaqswfmxmswehawifwdu",
      linkSource: "https://github.com/Carlos29Guardado/app_android_alcancias.git",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
