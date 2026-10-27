export const projects = [
  {
    title: "Dashboard De Riesgo Crediticio",
    category: "Power BI | Business Intelligence",
    status: "Publicado",
    featured: true,
    description:
      "Dashboard ejecutivo de solicitudes de crédito para explorar tasa de incumplimiento, ingresos, monto del crédito y segmentos sociodemográficos con una lectura responsable.",
    tools: ["Python", "Pandas", "Power BI", "DAX"],
    metric: "307.511 clientes | 8,07% incumplimiento",
    image: `${import.meta.env.BASE_URL}projects/credit-risk-dashboard.png`,
    imageAlt: "Dashboard de Power BI para análisis de riesgo crediticio",
    href: "https://github.com/droldana-oss/Credit-Risk-Analytics",
  },
  {
    title: "Análisis de Fraude Transaccional",
    category: "Machine Learning",
    status: "Publicado",
    featured: true,
    description:
      "Análisis y modelo de clasificación sobre transacciones PaySim para detectar patrones de fraude y priorizar operaciones sospechosas.",
    tools: ["Python", "Pandas", "Scikit-learn", "Power BI"],
    metric: "Random Forest | PaySim",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/fraude1.jpeg`,
        alt: "Dashboard de Power BI con indicadores e impacto económico del fraude en PaySim",
        label: "Resumen del fraude financiero",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/fraude2.jpeg`,
        alt: "Dashboard de patrones de fraude por tipo de transacción y rango de monto",
        label: "Patrones y señales de riesgo",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/fraude3.jpeg`,
        alt: "Dashboard de evaluación de Random Forest con métricas y matriz de confusión",
        label: "Evaluación del modelo de IA",
      },
    ],
    href: "https://github.com/droldana-oss/PaySim-Fraud-Analytics-Qualifying-Model",
  },
  {
    title: "Hábitos de Vida Universitaria",
    category: "Power BI | Análisis Personal",
    status: "Publicado",
    featured: true,
    description:
      "Dashboard personal para explorar productividad, sueño, consumo de café, ejercicio y estrés durante un periodo de vida universitaria.",
    tools: ["Excel", "Python", "Power BI"],
    metric: "27 días registrados | Hábitos y bienestar",
    image: `${import.meta.env.BASE_URL}projects/university-life-dashboard.png`,
    imageAlt: "Dashboard de hábitos, estrés y productividad universitaria",
    href: "https://github.com/droldana-oss/University-Life-Analytics-Dashboard",
  },
  {
    title: "Análisis de Videojuegos",
    category: "Power BI | Dashboard",
    status: "Publicado",
    featured: true,
    description:
      "Dashboard interactivo para comprender ventas históricas, géneros, plataformas, editoras y la relación entre críticas y éxito comercial.",
    tools: ["Power BI", "Excel", "Data Visualization"],
    metric: "16.418 juegos | 1980 - 2020",
    image: `${import.meta.env.BASE_URL}projects/video-game-dashboard.png`,
    imageAlt: "Dashboard de ventas y éxito comercial de videojuegos",
    href: "https://github.com/droldana-oss/Video-Game-Analytics-Dashboard",
  },
  {
    title: "StyleMatch: Product Analytics & API",
    category: "Product Analytics | Backend API",
    status: "Publicado",
    featured: true,
    description:
      "En este proyecto integré análisis de datos y backend para entender cómo se comportan 50 mil usuarios simulados de StyleMatch. Construí un dashboard para seguir la conversión, la retención y los puntos de abandono, y desarrollé una API REST con Python, FastAPI y SQLite para gestionar prendas, recomendar outfits y guardar favoritos.",
    tools: ["Python", "Pandas", "FastAPI", "SQLite", "Power BI"],
    metric: "50 mil usuarios | 25,32% conversión total",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/product-analytics-dashboard.jpeg`,
        alt: "Dashboard de Power BI con métricas de producto de StyleMatch",
        label: "Dashboard de analítica de producto",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/product-analytics-api.png`,
        alt: "Documentación Swagger de la API REST de StyleMatch",
        label: "API REST documentada con Swagger",
      },
    ],
    href: "https://github.com/droldana-oss/product-analytics-api",
  },
  {
    title: "GestiCost: Gestión de Finanzas Personales",
    category: "Desarrollo Web | Finanzas Personales",
    status: "Publicado",
    featured: true,
    description:
      "Aplicación web para registrar y organizar gastos por categoría y método de pago, consultar informes y hacer seguimiento a metas de ahorro. Desarrollada con Node.js, Express y Handlebars, con autenticación de Google y almacenamiento en Firebase; incluye una demo local con datos de ejemplo.",
    tools: ["JavaScript", "Node.js", "Express", "Handlebars", "Firebase"],
    metric: "Control de gastos | Informes | Metas de ahorro",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/gesticost1.png`,
        alt: "Panel de GestiCost con transacciones, categorías y filtros de gastos",
        label: "Panel de transacciones",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/gesticost2.png`,
        alt: "Formulario de GestiCost para registrar una transacción",
        label: "Registro de gastos",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/gesticost3.png`,
        alt: "Informe de gastos de GestiCost con total y resumen de transacciones",
        label: "Informe de gastos",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/gesticost4.png`,
        alt: "Panel de GestiCost con metas de ahorro y montos acumulados",
        label: "Metas de ahorro",
      },
    ],
    href: "https://github.com/droldana-oss/GestiCost",
  },
];
