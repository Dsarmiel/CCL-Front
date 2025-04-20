# 🧩 Angular App con PrimeNG y TailwindCSS

Este proyecto está desarrollado en **Angular 19**, integrando herramientas modernas como **TailwindCSS**, **PrimeNG**, **SweetAlert2** y una arquitectura modular clara para facilitar el mantenimiento y escalabilidad.

---

## 📁 Estructura del Proyecto

```plaintext
src/app
│
├── environments/             # Configuraciones de entorno (API endpoints, etc.)
│   └── environment.ts
│
├── guards/                   # Protección de rutas (ej. AuthGuard)
│   ├── auth.guard.ts
│   └── auth.guard.spec.ts
│
├── page/                     # Páginas principales de la aplicación
│   ├── login/                # Página de inicio de sesión
│   └── products/             # Página de productos
│
├── shared/                   # Elementos reutilizables
│   ├── DTOs/                 # Interfaces y clases de transferencia de datos
│   ├── interceptors/         # Interceptores HTTP globales
│   ├── response/             # Modelos de respuesta del backend
│   └── services/             # Servicios compartidos (auth, API, etc.)
│
├── app.component.*           # Componente raíz de la app
├── app.config.ts             # Configuraciones globales del proyecto
├── app.routes.ts             # Rutas principales (Angular Router)
├── app.theme.ts              # Configuración de tema y estilos
│
├── index.html                # HTML principal
├── main.ts                   # Punto de entrada de la aplicación Angular
└── styles.css                # Estilos globales (con TailwindCSS)


---

## 📦 Dependencias

Estas son las principales librerías utilizadas según el archivo `package.json`:

| Paquete                        | Descripción                                        |
|-------------------------------|----------------------------------------------------|
| `@angular/*`                  | Framework base de Angular                         |
| `primeng` y `@primeng/themes` | Componentes UI listos para usar con estilos       |
| `primeicons`                  | Conjunto de íconos compatibles con PrimeNG        |
| `tailwindcss`                 | Framework de estilos utility-first                |
| `tailwindcss-primeui`         | Integración entre Tailwind y componentes PrimeNG  |
| `sweetalert2`                 | Modales bonitos y personalizables                 |
| `rxjs`                        | Librería reactiva utilizada por Angular           |
| `zone.js`                     | Gestión del contexto asincrónico para Angular     |
| `postcss`                     | Procesador de estilos (requerido por Tailwind)    |
| `tslib`                       | Librería de utilidades para TypeScript            |

---

## ▶️ Cómo ejecutar el proyecto

### 1. Instalar dependencias

Desde la raíz del proyecto, ejecuta:

npm install

Luego ejecutar el siguiente comando para compilar el proyecto (por defecto se ejecuta en el puerto 4200):

ng serve 

### 2. Configurar entorno
Asegúrate de que el archivo src/app/environments/environment.ts esté configurado correctamente. Un ejemplo de configuración sería:

export const environment = {
  production: false,
  apiUrl: 'https://localhost:7265',
  endpoints: {
    auth: "/auth",
    products: "/productos"
  }
};