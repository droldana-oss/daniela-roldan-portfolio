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
