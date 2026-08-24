# De Sobrevivir a Elegir — Landing

Landing de captación (vanilla HTML/CSS/JS) para la Masterclass gratuita. Objetivo único: llevar al visitante al grupo privado de WhatsApp.

## Ver la landing

Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
```

## Editar el enlace de WhatsApp

Un único punto de edición: `js/main.js`, constante `WHATSAPP_URL`. Todos los botones de la página la reutilizan automáticamente.

## Añadir Meta Pixel

Pega el snippet oficial de Meta justo antes de `</head>` en `index.html` (hay un comentario que marca el lugar), y rellena `TRACKING_CONFIG.META_PIXEL_ID` en `js/main.js`.

## Añadir Google Analytics (GA4)

Pega el snippet `gtag.js` justo antes de `</head>` en `index.html`, y rellena `TRACKING_CONFIG.GA_MEASUREMENT_ID` en `js/main.js`.

Los parámetros UTM de la URL de entrada se conservan automáticamente y se añaden al enlace de WhatsApp al hacer clic.

## Desplegar

Carpeta 100% estática y autónoma. Sube el contenido de `landing/` tal cual a GitHub Pages, Netlify, Vercel o cualquier hosting estático — no requiere build ni dependencias.

## Estructura

```
landing/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
│   ├── images/   (webp optimizados)
│   └── icons/    (favicon.svg)
└── README.md
```
