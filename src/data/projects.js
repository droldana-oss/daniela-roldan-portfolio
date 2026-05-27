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
    image: `${import.meta.env.BASE_URL}projects/fraud-model-evaluation.png`,
    imageAlt: "Evaluación del modelo Random Forest para detección de fraude",
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
];
