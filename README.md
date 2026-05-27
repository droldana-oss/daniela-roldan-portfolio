# Portafolio | Daniela Roldán Arias

Sitio personal para presentar el perfil profesional, habilidades, certificaciones
y proyectos de análisis de datos de Daniela Roldán Arias.

## Tecnologías

- React + Vite
- Tailwind CSS 4
- Lucide React

## Inicio local

Requiere Node.js 20.19 o superior.

```bash
npm install
npm run dev
```

Vite mostrará la URL local de desarrollo en la terminal.

## Verificación y compilación

```bash
npm run lint
npm run build
npm run preview
```

La versión lista para publicar se genera en `dist/`.

## Datos editables

- `src/data/projects.js`: proyectos, herramientas, estados y enlaces.
- `src/data/skills.js`: categorías de habilidades.
- `src/data/certifications.js`: formación complementaria.
- `src/data/profile.js`: GitHub, CV y campos de contacto.

El perfil de GitHub, LinkedIn, el correo de contacto y los cuatro repositorios
publicados están configurados en `src/data/profile.js` y `src/data/projects.js`.

El CV descargable se encuentra en `public/cv/Daniela-Roldan-CV.pdf`.

## Despliegue

### GitHub Pages

Este portafolio está configurado para publicarse en:

```text
https://droldana-oss.github.io/daniela-roldan-portfolio/
```

El archivo `.github/workflows/deploy.yml` compila y publica el sitio
automáticamente con cada push a `main`. En GitHub, habilitar una vez:
`Settings > Pages > Source > GitHub Actions`.

### Vercel

1. Importar la carpeta o repositorio en Vercel.
2. Seleccionar el preset `Vite`.
3. Usar `npm run build` como comando de build y `dist` como directorio de salida.
4. Publicar el deployment.

### Netlify

1. Conectar el repositorio en Netlify.
2. Configurar `npm run build` como build command.
3. Configurar `dist` como publish directory.
4. Ejecutar el deploy.

## Estructura

```text
personal-web/
├── public/
│   ├── cv/
│   └── projects/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
