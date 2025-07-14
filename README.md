# 🎮 Memorama - Juego de Memoria Interactivo

![Memorama Game](./public/memorama.png)

## 📋 Descripción

Memorama es un juego de memoria interactivo desarrollado con [Alpine.js](https://alpinejs.dev) y [Tailwind CSS](https://tailwindcss.com). El objetivo del juego es encontrar todas las parejas de cartas antes de que se acabe el tiempo.

## ✨ Características

- ⏱️ Temporizador con pausa/reanudación
- 📱 Soporte completo para dispositivos táctiles
- 🎭 Animaciones fluidas y feedback visual
- 🏆 Modales de victoria y derrota con estadísticas
- 🎨 Responsivo con Tailwind CSS

## 🚀 Instalación

### Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de instalación

1. Clona este repositorio:

```bash
git clone https://github.com/Petox03/memogame.git
cd memogame
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🛠️ Tecnologías utilizadas

- [Alpine.js](https://alpinejs.dev) - Framework JavaScript minimalista
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitario
- [Vite](https://vitejs.dev) - Herramienta de construcción y desarrollo

## 🏗️ Estructura del proyecto

```
/
├── dist/               # Archivos compilados para producción
├── resources/
│   ├── css/            # Estilos CSS
│   │   └── cards.css   # Estilos específicos para las cartas
│   └── js/             # Archivos JavaScript
│       ├── index.js    # Punto de entrada principal
│       └── memorama.js # Componente Alpine.js del juego
├── index.html          # Archivo HTML principal
├── index.js            # Importaciones y configuración
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 📝 Cómo jugar

1. Haz clic en "Nuevo Juego" para comenzar
2. Encuentra todas las parejas antes de que se acabe el tiempo
3. Puedes pausar el juego en cualquier momento con el botón "Pausar"

## 🔧 Personalización

Puedes personalizar varios aspectos del juego:

- **Número de pares**: Configura la dificultad cambiando el número de pares en la variable `cardValues` en `index.js`

## 📦 Compilación para producción

Para compilar el proyecto para producción, ejecuta:

```bash
npm run build
# o
yarn build
```

Los archivos compilados se generarán en la carpeta `/dist`.

## 📄 Licencia

[MIT](https://choosealicense.com/licenses/mit/)
