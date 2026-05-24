export const projects = [
  {
    title: "Análisis de Riesgo Crediticio",
    category: "Business Intelligence",
    status: "Publicado",
    featured: true,
    description:
      "Análisis exploratorio de solicitudes de crédito para comprender perfiles con mayor exposición a dificultad de pago, utilizando indicadores financieros y segmentación.",
    tools: ["Python", "Pandas", "Power BI", "DAX"],
    metric: "Home Credit Default Risk",
    image: `${import.meta.env.BASE_URL}projects/credit-risk-segments.png`,
    imageAlt: "Tasas de dificultad de pago por segmento financiero",
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
    category: "Análisis personal",
    status: "Próximamente",
    featured: false,
    description:
      "Exploración de productividad, sueño, consumo de café, horas de estudio, ejercicio y bienestar estudiantil.",
    tools: ["Excel", "Python", "Power BI"],
    metric: "En desarrollo",
    href: null,
  },
  {
    title: "Análisis de Videojuegos",
    category: "Dashboard",
    status: "Próximamente",
    featured: false,
    description:
      "Dashboard interactivo para explorar tendencias, géneros, plataformas y métricas clave de videojuegos.",
    tools: ["Power BI", "Excel", "Data Visualization"],
    metric: "En desarrollo",
    href: null,
  },
];
