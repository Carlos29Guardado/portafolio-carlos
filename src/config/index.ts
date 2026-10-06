
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
      cvButton: "Descargar CV"
    },
    experience: [
      {
      company: "Recauda (Proyecto Independiente)",
      position: "Desarrollador Mobile Full Stack",
      startDate: "Junio 2026",
      endDate: "Presente",
      summary: [
        "Desarrollo de aplicación móvil con React Native y Expo para digitalizar el seguimiento de recaudo en campo, respaldada por una API REST en Node.js y PostgreSQL (Neon).",
        "Implementación de despliegues Over-The-Air (OTA) mediante expo-updates, logrando enviar actualizaciones instantáneas de interfaz y lógica sin requerir reinstalar el APK."
      ]
    },
      {
        company: "Proyecto Sismo SV",
        position: "Especialista en Despliegue Web",
        startDate: "Junio 2026",
        endDate: "Agosto 2026",
        summary: [
          "Desarrollo integral de la plataforma web utilizando React para el frontend y Node.js con MongoDB para el backend.",
          "Integración de un servicio de Machine Learning externo desarrollado en Python para el análisis y monitoreo de datos.",
          "Responsable de la configuración y paso a producción de la plataforma web (Vercel y Render).",
          "Ejecución del despliegue exitoso, garantizando la correcta comunicación y sincronización de los tres entornos en la nube."
        ],
      },
    ],
    projects: [
      {
      name: "Recauda - App Móvil",
      summary: "Aplicación móvil para digitalizar el seguimiento de donaciones en campo. Desarrollada con React Native, Node.js y PostgreSQL, implementando actualizaciones OTA.",
      linkPreview: "https://youtube.com/shorts/AXrE26x6jnQ?si=iCw1jUzv3OTnE6mt",
      linkSource: "https://github.com/Carlos29Guardado/recauda-app",
    },
      {
        name: "Sistema POS e Inventario (Llantería)",
        summary: "Plataforma Full-Stack desarrollada con Angular en el frontend y Node.js/Express en el backend. Permite el control total de inventarios y gestión de usuarios con operaciones CRUD completas y persistencia en MongoDB Atlas.",
        linkPreview: "https://proyecto-pos-llanteria-five.vercel.app/inventario",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-pos-llanteria.git",
      },
      {
        name: "Plataforma de Monitoreo - Sismos SV",
        summary: "Aplicación Full-Stack para el análisis de riesgo sísmico. Desarrollada con React, Node.js, MongoDB y un microservicio de Machine Learning en Python alojado en Render.",
        linkPreview: "https://proyecto-simos-sv-frontend.vercel.app/",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-simos-sv-frontend.git",
      },
      {
        name: "PC-SalesBot Pro - Asistente de IA para Telegram",
        summary: "Bot inteligente desarrollado con Python, la API de Google Gemini y MongoDB Atlas. Permite la recomendación de hardware, validación de catálogos y persistencia de historiales, desplegado en la nube utilizando Render.",
        linkPreview: "https://web.telegram.org/a/#8545823479",
        linkSource: "https://github.com/Carlos29Guardado/chatBot-PcSalesBot-Pro.git",
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
      cvButton: "Download CV"
    },
    experience: [
      {
      company: "Recauda (Independent Project)",
      position: "Full Stack Mobile Developer",
      startDate: "June 2026",
      endDate: "Present",
      summary: [
        "Engineered a mobile application to digitalize field donation tracking using React Native and Expo, backed by a Node.js RESTful API and a cloud-based PostgreSQL database (Neon).",
        "Architected an offline-first system utilizing AsyncStorage, enabling field volunteers to seamlessly operate and record data in zero-connectivity environments.",
        "Implemented Over-The-Air (OTA) deployment pipelines via expo-updates, allowing instant interface and logic updates without requiring full APK reinstalls."
      ]
    },
      {
        company: "Proyecto Sismo SV",
        position: "Web Deployment Specialist",
        startDate: "June 2026",
        endDate: "August 2026",
        summary: [
          "Full development of the web platform using React for the frontend and Node.js with MongoDB for the backend.",
          "Integration of an external Machine Learning service developed in Python for data analysis and monitoring.",
          "Responsible for the configuration and production release of the web platform (Vercel and Render).",
          "Execution of a successful deployment, ensuring proper communication and synchronization across all three cloud environments."
        ],
      }
    ],
    projects: [
      {
      name: "Recauda - Mobile App",
      summary: "Mobile application to digitalize field donation tracking. Developed with React Native, Node.js, and PostgreSQL, implementing OTA updates.",
      linkPreview: "https://youtube.com/shorts/AXrE26x6jnQ?si=iCw1jUzv3OTnE6mt",
      linkSource: "https://github.com/Carlos29Guardado/recauda-app",
    },
      {
        name: "POS & Inventory System (Llantería)",
        summary: "Full-Stack Point of Sale and Inventory platform built with Angular (Frontend) and Node.js/Express (Backend). Enables total inventory control and user management with full CRUD operations and MongoDB Atlas persistence.",
        linkPreview: "https://proyecto-pos-llanteria-five.vercel.app/inventario",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-pos-llanteria.git",
      },
      {
        name: "Monitoring Platform - Sismos SV",
        summary: "Full-stack application for seismic risk analysis. Developed with React, Node.js, MongoDB, and a Python Machine Learning microservice hosted on Render.",
        linkPreview: "https://proyecto-simos-sv-frontend.vercel.app/",
        linkSource: "https://github.com/Carlos29Guardado/proyecto-simos-sv-frontend.git",
      },
      {
        name: "PC-SalesBot Pro - Telegram AI Assistant",
        summary: "Intelligent bot developed with Python, the Google Gemini API, and MongoDB Atlas. It enables hardware recommendations, catalog validation, and chat history persistence, deployed to the cloud using Render.",
        linkPreview: "https://web.telegram.org/a/#8545823479",
        linkSource: "https://github.com/Carlos29Guardado/chatBot-PcSalesBot-Pro.git",
      },
    ],
    about: {
      description: `Hi, I'm Carlos Guardado, a Software Developer focused on building robust and scalable web and mobile applications. I specialize in designing end-to-end digital solutions, modern backend architectures, and high-performance interfaces that drive operational efficiency and solve complex problems.`,
      image: "/perfil.png",
    },
  }
};