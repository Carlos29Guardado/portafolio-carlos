import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos Manuel Guardado — Full Stack Developer Junior",
  author: "Carlos Manuel Guardado",
  description:
    "Estudiante de Ingeniería en Sistemas radicado en El Salvador. Especializado en el desarrollo full-stack de aplicaciones web y creación de aplicaciones móviles nativas.",
  lang: "es",
  siteLogo: "/perfil.png",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" }
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
      name: " JuegosCentral",
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
      image: "/libreriaWeb.png",
    },
    {
      name: "Sistema POS e Inventario (Llantería)",
      summary: "Plataforma Full-Stack desarrollada con Angular en el frontend y Node.js/Express en el backend. Permite el control total de inventarios y gestión de usuarios con operaciones CRUD completas y persistencia en MongoDB Atlas.",
      linkPreview: "https://proyecto-pos-llanteria-five.vercel.app/inventario",
      linkSource: "https://github.com/Carlos29Guardado/proyecto-pos-llanteria.git",
      image: "/llanteripos.png",
    },
  ],
  about: {
    description: `
      Hola, soy Carlos Guardado, Desarrollador de Software enfocado en la creación de aplicaciones web y móviles robustas y escalables. Me especializo en diseñar soluciones digitales de extremo a extremo, arquitecturas backend modernas e interfaces de alto rendimiento que impulsan la eficiencia operativa y resuelven problemas complejos.
    `,
    image: "/perfil.png",
  },
};

// #5755ff
