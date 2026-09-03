import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG = {
  es: {
    title: "Carlos Manuel Guardado — Full Stack Developer Junior",
    author: "Carlos Manuel Guardado",
    description: "Desarrollador Full Stack con experiencia en el ciclo completo de desarrollo y despliegue de aplicaciones web. Especializado en crear interfaces dinámicas, gestionar bases de datos y orquestar arquitecturas en la nube",
    lang: "es",
    siteLogo: "/perfil.png",
    navLinks: [
      { text: "Experiencia", href: "#experience" },
      { text: "Proyectos", href: "#projects" },
      { text: "Sobre mí", href: "#about" },
    ],
    socialLinks: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/carlos-guardado-2298573a7/" },
      { text: "Github", href: "https://github.com/Carlos29Guardado" }
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://astro-zen.vercel.app",
  },
  en: {
    title: "Carlos Manuel Guardado — Junior Full Stack Developer",
    author: "Carlos Manuel Guardado",
    description: "Full Stack Developer with experience in the complete web application development and deployment lifecycle. Specialized in creating dynamic interfaces, managing databases, and orchestrating cloud architectures.",
    lang: "en",
    siteLogo: "/perfil.png",
    navLinks: [
      { text: "Experience", href: "#experience" },
      { text: "Projects", href: "#projects" },
      { text: "About", href: "#about" },
    ],
    socialLinks: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/carlos-guardado-2298573a7/" },
      { text: "Github", href: "https://github.com/Carlos29Guardado" }
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://astro-zen.vercel.app",
  }
};

export const SITE_CONTENT = {
  es: {
    hero: {
      name: "Carlos Manuel Guardado",
      specialty: "Full Stack Developer Junior",
      summary: "Desarrollador Full Stack con experiencia en el ciclo completo de desarrollo y despliegue de aplicaciones web. Especializado en crear interfaces dinámicas, gestionar bases de datos y orquestar arquitecturas en la nube",
      email: "cmgd292005@gmail.com",
    },
    experience: [
      {
        company: "Iglesia Comunitaria (Proyecto Independiente)",
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
        name: "JuegosCentral",
        summary: "Interfaz responsiva de gestión de productos con operaciones CRUD completas manipulando el DOM. Desarrollado nativamente con HTML5, CSS3 y Vanilla JavaScript.",
        linkPreview: "https://proyecto-juego-central.vercel.app/dashboard.html",
        linkSource: "https://github.com/Carlos29Guardado/Proyecto-JuegoCentral.git",
      },
      {
        name: "Sistema de Inventario MERN",
        summary: "Plataforma Full-Stack para gestión de libros. Desarrollada con React.js en el frontend y Node.js/Express en el backend, con persistencia en MongoDB Atlas y autenticación JWT.",
        linkPreview: "https://libreria-web-proyecto.vercel.app/",
        linkSource: "https://github.com/Carlos29Guardado/Librer-a-Web-Proyecto.git",
      },
      {
        name: "Sistema POS e Inventario (Llantería)",
        summary: "Plataforma Full-Stack desarrollada con Angular en el frontend y Node.js/Express en el backend. Permite el control total de inventarios y gestión de usuarios con operaciones CRUD completas y persistencia en MongoDB Atlas.",
        linkPreview: "https://proyecto-pos-llanteria-five.vercel.app/inventario",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-pos-llanteria.git",
      },
    ],
    about: {
      description: `Hola, soy Carlos Guardado, Desarrollador de Software enfocado en la creación de aplicaciones web y móviles robustas y escalables. Me especializo en diseñar soluciones digitales de extremo a extremo, arquitecturas backend modernas e interfaces de alto rendimiento que impulsan la eficiencia operativa y resuelven problemas complejos.`,
      image: "/perfil.png",
    },
  },
  en: {
    hero: {
      name: "Carlos Manuel Guardado",
      specialty: "Junior Full Stack Developer",
      summary: "Full Stack Developer with experience in the complete web application development and deployment lifecycle. Specialized in creating dynamic interfaces, managing databases, and orchestrating cloud architectures.",
      email: "cmgd292005@gmail.com",
    },
    experience: [
      {
        company: "Community Church (Independent Project)",
        position: "Native Android Developer",
        startDate: "2024",
        endDate: "2026",
        summary: [
          "Designed and developed a native Java mobile application to digitize the registration and logistical tracking of community donation boxes.",
          "Implemented local data persistence using SQLite, significantly optimizing the management and security of financial records.",
          "Configured ngrok network tunnels to enable seamless app communication and data synchronization with a local server."
        ],
      },
      {
        company: "Sismos SV Project",
        position: "Web Deployment Specialist",
        startDate: "June 2026",
        endDate: "August 2026",
        summary: [
          "Spearheaded the configuration and production deployment of the Sismos SV earthquake monitoring web platform.",
          "Executed the successful deployment of both frontend and backend environments, ensuring seamless communication and high availability on the web."
        ],
      },
    ],
    projects: [
      {
        name: "JuegosCentral",
        summary: "Responsive product management interface featuring full CRUD operations via DOM manipulation. Developed natively with HTML5, CSS3, and Vanilla JavaScript.",
        linkPreview: "https://proyecto-juego-central.vercel.app/dashboard.html",
        linkSource: "https://github.com/Carlos29Guardado/Proyecto-JuegoCentral.git",
      },
      {
        name: "MERN Inventory System",
        summary: "Full-Stack platform for book management. Developed with React.js (Frontend) and Node.js/Express (Backend), featuring MongoDB Atlas persistence and secure JWT authentication.",
        linkPreview: "https://libreria-web-proyecto.vercel.app/",
        linkSource: "https://github.com/Carlos29Guardado/Librer-a-Web-Proyecto.git",
      },
      {
        name: "POS & Inventory System (Llantería)",
        summary: "Full-Stack Point of Sale and Inventory platform built with Angular (Frontend) and Node.js/Express (Backend). Enables total inventory control and user management with full CRUD operations and MongoDB Atlas persistence.",
        linkPreview: "https://proyecto-pos-llanteria-five.vercel.app/inventario",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-pos-llanteria.git",
      },
    ],
    about: {
      description: `Hi, I'm Carlos Guardado, a Software Developer focused on building robust and scalable web and mobile applications. I specialize in designing end-to-end digital solutions, modern backend architectures, and high-performance interfaces that drive operational efficiency and solve complex problems.`,
      image: "/perfil.png",
    },
  }
};