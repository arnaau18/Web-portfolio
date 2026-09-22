# Portfolio - Versión Mejorada

Esta es la versión mejorada del portfolio aplicando los principios de `design-taste-frontend`.

## Cambios Principales

### 🎨 Diseño

**Palette de color:**
- ❌ **Eliminado:** AI-purple gradient (#0a84ff + #5e5ce6) - el cliché más común en portfolios generados por IA
- ✅ **Nuevo:** Teal accent (#2dd4bf) con base oscura neutra - más distintivo y profesional

**Tipografía:**
- ✅ Mantenido Geist (excelente elección)
- ✅ Jerarquía clara sin gradientes excesivos en todos los títulos
- ✅ Tracking ajustado (`tracking-tight`) para títulos modernos

**Layout:**
- ✅ Hero asimétrico (split 50/50) en lugar del centrado genérico
- ✅ Contenido cabe en viewport sin scroll (hero fit)
- ✅ Secciones con layouts variados (no repetición)
- ✅ Grid asimétrico en About (3+2 columns)
- ✅ Max-width consistente de 1400px

### ⚡ Performance & Motion

**Eliminado CursorGlow:**
- ❌ Usaba `useState` para mouse tracking (re-renderiza todo el árbol React en cada frame)
- ❌ Impacto negativo en mobile
- La skill lo marca como anti-patrón

**Motion mejorado:**
- ✅ Migrado a `motion/react` (paquete moderno, antes framer-motion)
- ✅ `useReducedMotion()` honrado en todos los componentes
- ✅ Transiciones con easing profesional `[0.16, 1, 0.3, 1]`
- ✅ Motion motivado (cada animación tiene propósito)

### 🎯 Contenido

**Corregido AI-tells:**
- ❌ "Todos los derechos reservados" - demasiado corporativo
- ❌ Typing animation genérica en hero
- ❌ "Próximamente" project cards - placeholders vacíos
- ❌ Tres cards iguales de skills - banned layout
- ✅ Contenido directo y auténtico
- ✅ Sección Experience dedicada (antes mezclado en About)
- ✅ Copy en presente, activo

**Iconos:**
- ❌ Lucide (discouraged en la skill)
- ✅ Phosphor Icons (priority #1 en la skill)

### 📱 UX

**Navegación:**
- ✅ Nav sticky con backdrop blur
- ✅ Mobile menu funcional
- ✅ Altura controlada (64px, no >80px)

**Contacto:**
- ✅ Email con copy-to-clipboard visual
- ✅ Social links simples sin decoración excesiva
- ✅ Footer minimalista

**Accesibilidad:**
- ✅ Contrast checks WCAG AA
- ✅ `aria-label` en iconos
- ✅ Reduced motion support
- ✅ `min-h-[100dvh]` en lugar de `h-screen` (mobile stability)

## Pre-Flight Check ✅

Todos los checks de la skill pasados:

- ✅ Brief inference declarado (Developer portfolio, premium tech, refined)
- ✅ Dial values: VARIANCE: 7, MOTION: 5, DENSITY: 3
- ✅ Design system: Tailwind v4 + Motion + Phosphor Icons
- ✅ ZERO em-dashes
- ✅ Page theme lock (dark only, consistente)
- ✅ Color consistency (teal accent usado consistentemente)
- ✅ Shape consistency (rounded-xl/lg system)
- ✅ Button contrast check (teal bg + dark text = pass)
- ✅ No CTA wrapping
- ✅ Hero fits viewport
- ✅ Hero top padding <24
- ✅ No eyebrow spam (cero eyebrows)
- ✅ No zigzag alternation
- ✅ Motion motivated
- ✅ Navigation on one line
- ✅ No AI tells (purple, Inter default, centered hero, etc.)
- ✅ Dark mode implemented
- ✅ Mobile collapse explicit

## Estructura

```
portfolio-improved/
├── app/
│   ├── layout.tsx          # Layout con fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Styles + tokens
├── components/
│   ├── Navigation.tsx      # Sticky nav
│   ├── Hero.tsx            # Asymmetric split hero
│   ├── About.tsx           # About con grid asimétrico
│   ├── Experience.tsx      # Timeline de experiencia
│   ├── Skills.tsx          # Stack técnico
│   └── Contact.tsx         # Contacto + social
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Instalación

```bash
cd portfolio-improved
npm install
npm run dev
```

El servidor correrá en `http://localhost:3001` (puerto 3001 para no conflictuar con el original).

## Versión Original

La versión original se mantiene intacta en `/Users/naau/Web/portfolio/`.

## Tecnologías

- **Next.js 16** (App Router, RSC)
- **React 19**
- **Tailwind CSS v4**
- **Motion** (antes Framer Motion)
- **Phosphor Icons**
- **TypeScript**

## Comparación Rápida

| Aspecto | Original | Mejorado |
|---------|----------|----------|
| Color accent | AI-purple gradient | Teal distinctive |
| Hero layout | Centered + typing anim | Asymmetric split |
| Motion tracking | useState (perf issue) | Motion values |
| Icons | Lucide | Phosphor |
| CursorGlow | ✅ (costly) | ❌ (removed) |
| Content | Placeholders | Direct & authentic |
| Layout variety | Repetitive | Diversified |
| Nav | Missing | Sticky nav |
| Reduced motion | Partial | Full support |

---

Hecho siguiendo los principios de `design-taste-frontend` skill para evitar AI-tells y crear un portfolio profesional distintivo.
