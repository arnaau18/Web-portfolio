# Portfolio Personal - Arnau Fores Garcia

Portfolio web moderno y minimalista con diseño glassmorphism y animaciones fluidas.

## 🚀 Características

- **Diseño moderno**: Estilo glassmorphism con efectos bento box
- **Animaciones fluidas**: Scroll reveal animations con Framer Motion
- **Efecto cursor interactivo**: Fondo que sigue el cursor del mouse
- **100% Responsive**: Optimizado para todos los dispositivos
- **Dark mode**: Tema oscuro con acentos vibrantes (azul eléctrico y púrpura neón)
- **Single Page Application**: Navegación suave entre secciones

## 🛠️ Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)

## 📦 Estructura del Proyecto

```
portfolio/
├── app/
│   ├── layout.tsx       # Layout principal con fuentes Geist
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales y tema
├── components/
│   ├── CursorGlow.tsx   # Efecto cursor interactivo
│   ├── Hero.tsx         # Sección hero con efecto typing
│   ├── About.tsx        # Sección sobre mí
│   ├── Skills.tsx       # Habilidades (bento box)
│   ├── Projects.tsx     # Proyectos (próximamente)
│   └── Contact.tsx      # Contacto y redes sociales
└── lib/
    └── utils.ts         # Utilidades (cn para Tailwind)
```

## 🎨 Secciones

1. **Hero**: Presentación con efecto de escritura dinámica
2. **Sobre Mí**: Transición de eSports profesional a desarrollo de software
3. **Habilidades**: Grid con tecnologías (Java, SQL, Git, VS Code, JavaScript, TypeScript)
4. **Proyectos**: Dos espacios reservados para proyectos futuros
5. **Contacto**: Redes sociales y botón para copiar email

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Producción
```bash
npm start
```

## 📝 Personalización

### Actualizar información personal:

1. **Email**: Edita `components/Contact.tsx` línea 16
2. **Redes sociales**: Edita las URLs en `components/Contact.tsx` líneas 18-32
3. **Proyectos**: Cuando estén listos, actualiza `components/Projects.tsx`

### Colores del tema:

Los colores se configuran en `app/globals.css`:
- `--primary`: Azul primario (#3b82f6)
- `--secondary`: Púrpura (#8b5cf6)
- `--accent`: Cyan (#06b6d4)

## 📱 Responsive

El sitio está optimizado para:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ⚡ Performance

- Fuentes optimizadas con `next/font`
- Animaciones GPU-accelerated con Framer Motion
- Lazy loading de componentes
- Tailwind CSS purging automático

## 📄 Licencia

© 2024 Arnau Fores Garcia. Todos los derechos reservados.
