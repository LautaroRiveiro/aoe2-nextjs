# Civilizaciones de Age2
El sitio es un navegador entre civilizaciones del Age of Empires 2 con posibilidad de guardar en favoritos.
Este proyecto muestra la construcción de páginas estáticas con NextJs con y sin datos y con una ruta dinámica.
- La Home es estática con datos (getStaticProps)
- La 404 es estática sin datos
- La ruta /civ/name es estática generada de manera dinámica (getStaticPaths + getStaticProps)
Manejo de localStorage para guardar localmente en favoritos

## Tecnologías
- NextJS 12 ([Create Next App](https://nextjs.org/docs/api-reference/create-next-app))
- Axios
- LocalStorage
- [NextUI 1-beta.6](https://nextui.org/)
- [Age Of Empires II API](https://age-of-empires-2-api.herokuapp.com/docs/)
- [Vercel](https://vercel.com/)

## Idea
Proyecto basado en curso [Next.js: El framework de React para producción (Fernando Herrera)](https://aprenderjavascript.online/clon-de-spotify), sección 4: 'Static Generated App'

## Demo
[https://aoe2-nextjs.vercel.app/](https://aoe2-nextjs.vercel.app/)

## Comandos
- **Instalar dependencias:** npm install
- **Iniciar en desarrollo:** npm run dev
- **Iniciar en producción:** npm run build && npm run start
