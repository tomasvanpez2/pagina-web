# [Nombre del Estudio] — Landing Page Awwwards-Level (Quiet Luxury)

Experiencia web de alta gama construida con arquitectura **Next.js (App Router)**, **Tailwind CSS**, **React Three Fiber (WebGL)**, **GSAP + ScrollTrigger** y **Lenis Smooth Scroll**.

Diseñada bajo el paradigma estético y conceptual de **"Quiet Luxury"**: tensión espacial asimétrica, tipografía editorial de alto contraste, textura cinematográfica y cero reflows (60 FPS estables).

---

## 🚀 Stack Tecnológico

* **Framework Base**: [Next.js 16 (App Router)](https://nextjs.org/) + TypeScript en modo estricto.
* **Estilizado & Tokens**: [Tailwind CSS v4](https://tailwindcss.com/) con paleta monocromática profunda (`#080808`, `#111112`, `#F5F5F3`).
* **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) sincronizado con el ticker de renderizado de GSAP.
* **Orquestación de Movimiento**: [GSAP](https://gsap.com/) + ScrollTrigger (únicamente propiedades aceleradas por hardware: `transform`, `opacity`, `clip-path`).
* **Experiencia 3D**: [React Three Fiber](https://r3f.docs.pmnd.rs/) + [Drei](https://github.com/pmndrs/drei) + Three.js ("Mascota Abstracta" reactiva al puntero y scroll con material físico de refracción y constelación de partículas determinista).

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css                # Variables Quiet Luxury, textura noise y normalizaciones
│   ├── layout.tsx                 # Root layout con Google Fonts (Cormorant Garamond, Geist)
│   └── page.tsx                   # Composición secuencial de secciones y orquestación
├── components/
│   ├── sections/
│   │   ├── Header.tsx             # Navegación fija con reloj UTC, estatus y drawer móvil
│   │   ├── Hero.tsx               # Hero asimétrico con el mensaje obligatorio y viewport 3D
│   │   ├── Manifesto.tsx          # Manifiesto editorial anti-plantillas
│   │   ├── Services.tsx           # Acordeón de capacidades técnicas y entregables
│   │   ├── SelectedWorks.tsx      # Archivo de 3 proyectos insignia con hover shaders
│   │   ├── Process.tsx            # Metodología de 4 fases de producción
│   │   └── Footer.tsx             # CTA monumental y bloque de contacto
│   ├── three/
│   │   ├── AbstractMascot.tsx     # Mascota abstracta (Prisma facetado + partículas)
│   │   ├── ClientScene.tsx        # Dynamic import (ssr: false) con fallback de inicio
│   │   └── SceneContainer.tsx     # Canvas WebGL con cámara, luces e iluminación lumi
│   └── ui/
│       ├── CustomCursor.tsx       # Cursor contextual interpolado con gsap.quickTo
│       ├── GrainOverlay.tsx       # Textura cinematográfica procedural (SVG filter)
│       ├── HairlineDivider.tsx    # Divisores estructurales de 1px con metadatos
│       └── MagneticButton.tsx     # Botón magnético con física de atracción elástica
├── hooks/
│   └── usePageAnimations.ts       # Timelines GSAP y ScrollTriggers con gsap.context()
└── providers/
    └── SmoothScrollProvider.tsx   # Puente de sincronización entre Lenis y GSAP
```

---

## ✏️ Guía de Personalización de Placeholders `[ ]`

Todos los datos a rellenar por el cliente están explícitamente identificados entre corchetes `[ ]`. Para personalizar:

1. **Nombre del Estudio e Identidad**:
   * Reemplazar `[Nombre del Estudio]` en `src/components/sections/Header.tsx`, `Hero.tsx` y `Footer.tsx`.
   * Actualizar metadatos en `src/app/layout.tsx`.
2. **Ubicación & Huso Horario**:
   * Editar `[Ciudad, País]` y la zona horaria en `Header.tsx` y `Footer.tsx`.
3. **Casos de Estudio**:
   * Personalizar títulos y alcances en `src/components/sections/SelectedWorks.tsx` (`[Proyecto Alpha]`, `[Proyecto Beta]`, `[Proyecto Gamma]`).
4. **Contacto & Redes**:
   * Actualizar el correo en `Footer.tsx` (`[contacto@estudio.com]`) y enlaces sociales.

---

## ⚡ Comandos de Desarrollo y Producción

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Ejecutar auditoría estricta de ESLint
npm run lint

# Compilar para producción (Zero errors check)
npm run build

# Iniciar bundle de producción
npm start
```

---

## 🌐 Preparado para Despliegue en Vercel

El proyecto está 100% optimizado para la red perimetral de **Vercel**:
* Cero errores de compilación TypeScript.
* Manejo automático de páginas estáticas prerenderizadas.
* Detección activa de `prefers-reduced-motion` para accesibilidad WCAG.
* Soporte responsivo de 320px a 4K.
