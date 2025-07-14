# 🎮 Memorama - Juego de Memoria Interactivo

![Memorama Game](https://via.placeholder.com/800x400/6D28D9/FFFFFF?text=Memorama+Game)

## 📋 Descripción

Memorama es un juego de memoria interactivo desarrollado con [Alpine.js](https://alpinejs.dev) y [Tailwind CSS](https://tailwindcss.com). El objetivo del juego es encontrar todas las parejas de cartas antes de que se acabe el tiempo. El juego incluye múltiples tipos de contenido para las cartas (emojis, imágenes, texto, números) y soporte completo para interacción táctil con drag & drop.

## ✨ Características

- 🃏 Múltiples tipos de contenido: emojis, imágenes, texto y números
- 🎯 Configuración flexible del número de pares (4, 6, 8 o 10)
- 🔄 Soporte para contenido personalizado definido por el usuario
- ⏱️ Temporizador con pausa/reanudación
- 📱 Soporte completo para dispositivos táctiles con drag & drop
- 🎭 Animaciones fluidas y feedback visual
- 🏆 Modales de victoria y derrota con estadísticas
- 🎨 Diseño moderno y responsivo con Tailwind CSS

## 🚀 Instalación

### Requisitos previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/memorama.git
cd memorama
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

1. Selecciona el tipo de contenido para las cartas (emojis, imágenes, texto o números)
2. Elige el número de pares que deseas jugar (4, 6, 8 o 10)
3. Opcionalmente, introduce tu propio contenido personalizado separado por comas
4. Haz clic en "Nuevo Juego" para comenzar
5. Encuentra todas las parejas antes de que se acabe el tiempo
6. Puedes pausar el juego en cualquier momento con el botón "Pausar"
7. En dispositivos táctiles, también puedes arrastrar y soltar las cartas para seleccionarlas

## 🔧 Personalización

Puedes personalizar varios aspectos del juego:

- **Tipo de contenido**: Elige entre emojis, imágenes, texto o números
- **Número de pares**: Configura la dificultad cambiando el número de pares
- **Contenido personalizado**: Introduce tus propios valores separados por comas
- **Tiempo**: Modifica la variable `timeLeft` en `memorama.js` para cambiar la duración del juego

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
