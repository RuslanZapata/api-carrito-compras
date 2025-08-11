# Prueba Técnica: API y Carrito de Compras - Hoy Trabajas

Una aplicación de carrito de compras con API REST y optimizador de presupuesto construida con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

### Backend (API REST)
- **GET /api/products** - Obtiene la lista de productos disponibles
- **GET /api/cart** - Obtiene el contenido actual del carrito
- **POST /api/cart** - Agrega un producto al carrito
- **DELETE /api/cart** - Vacía el carrito completamente
- **POST /api/budget-optimizer** - Optimiza una selección de productos según presupuesto

### Frontend
- Interfaz moderna y responsiva con Tailwind CSS
- Gestión de estado en tiempo real
- Componentes reutilizables
- Navegación por pestañas (productos, carrito, optimizador)

### Optimizador de Presupuesto
- Encuentra la mejor combinación de productos sin exceder el presupuesto
- Interfaz interactiva para probar diferentes presupuestos

## 🛠️ Tecnologías

- **Next.js 15+** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos
- **Sonner** - Notificaciones toast

## 📦 Instalación y Ejecución

### Prerrequisitos
- Node.js
- npm

### Pasos de instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🔧 Estructura del Proyecto

```
├── app/                # Rutas, páginas y layouts principales de la app
│   ├── api/            # Endpoints de la API REST
│   ├── layout.tsx      # Estructura base de la aplicación
│   └── page.tsx        # Página principal (catálogo de productos)
├── components/         # Componentes reutilizables de React
│   └── atoms/          # Componentes UI pequeños (botones, tarjetas, etc.)
├── context/            # Contextos globales de React para manejo de estado
├── types/              # Tipos y modelos TypeScript
├── utils/              # Funciones y lógica auxiliar
└── README.md           # Documentación del proyecto
```

**Desarrollado por**: Ruslan Zapata  
**Tecnologías**: Next.js, TypeScript, Tailwind CSS  