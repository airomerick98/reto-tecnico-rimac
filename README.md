# RIMAC — Reto Técnico Frontend

Aplicación de cotización de seguro de salud desarrollada como reto técnico para RIMAC Seguros.

## Stack tecnológico

| Herramienta | Versión | Uso |
|---|---|---|
| React | 19 | UI |
| TypeScript | 6 | Tipado estático |
| Vite | 8 | Bundler y dev server |
| Tailwind CSS | 4 | Estilos utilitarios |
| Zustand | 5 | Estado global |
| TanStack Query | 5 | Fetching y caché de datos |
| Axios | 1 | Cliente HTTP |

## Requisitos previos

- Node.js 18+
- npm 9+

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_URL_DOMAIN_USER=https://rimac-front-end-challenge.netlify.app/api/user.json
VITE_URL_DOMAIN_PLANS=https://rimac-front-end-challenge.netlify.app/api/plans.json
```

## Flujo de la aplicación

```
Login ──► Planes y coberturas ──► Resumen del seguro
```

### 1. Login
- El usuario ingresa tipo de documento (DNI / CE), número de documento y celular
- Validaciones: DNI requiere 8 dígitos, CE requiere 12, celular debe iniciar en 9 y tener 9 dígitos
- Se requiere aceptar la Política de Privacidad para habilitar el botón
- Al enviar se consume el servicio `/user` para obtener los datos del usuario
- Los datos del formulario y la respuesta del API se guardan en el store global

### 2. Planes y coberturas
- Se muestran dos opciones de cobertura: **Para mí** y **Para alguien más**
- Los planes se obtienen del servicio `/plans` al cargar la vista
- Solo se muestran planes cuyo campo `age` sea mayor o igual a la edad del usuario
- Al seleccionar **Para alguien más** se aplica un **descuento del 5%** sobre el precio de cada plan
- En mobile los planes se presentan como un carrusel (un plan a la vez con navegación `< 1/3 >`)
- En desktop se muestran en una grilla de 3 columnas
- Al seleccionar un plan se guarda en el store y se navega al resumen

### 3. Resumen del seguro
- Muestra un resumen con:
  - Nombre completo del usuario (del API `/user`)
  - Tipo y número de documento
  - Celular
  - Plan elegido y costo final (ya con descuento si aplica)

## Estructura del proyecto

```
src/
├── App.tsx                        # Entrada: monta AppRouter
├── main.tsx                       # Providers (QueryClient, StrictMode)
│
├── app/
│   ├── router/
│   │   └── AppRouter.tsx          # Decide qué página + layout renderizar
│   ├── layouts/
│   │   ├── AuthLayout.tsx         # Layout para login (sin stepper)
│   │   └── StepLayout.tsx         # Layout para planes y resumen (con stepper)
│   └── pages/
│       ├── LoginPage.tsx          # Vista de login (solo JSX)
│       ├── PlansPage.tsx          # Vista de selección de planes (solo JSX)
│       └── SummaryPage.tsx        # Vista de resumen (solo JSX)
│
├── core/
│   ├── api/
│   │   └── api.ts                 # Instancia de Axios
│   ├── components/
│   │   ├── card/Card.tsx          # Card seleccionable (Para mí / Para alguien más)
│   │   ├── header/Header.tsx      # Header global con logo y teléfono
│   │   └── stepper/Stepper.tsx    # Indicador de pasos (desktop + mobile)
│   ├── constants/
│   │   └── validationMessages.ts  # Mensajes de error centralizados
│   └── ui/
│       ├── bullet/BulletItem.tsx    # Ítem de lista con punto
│       ├── button/Button.tsx        # Botón reutilizable
│       ├── checkbox/Checkbox.tsx    # Checkbox con label
│       └── input/
│           ├── InputTextField.tsx   # Input de documento (DNI/CE)
│           └── InputNumberField.tsx # Input de celular
│
└── features/
    ├── plans/
    │   ├── api/getPlans.ts               # Fetch de planes
    │   ├── components/
    │   │   ├── PlanCard.tsx              # Tarjeta de un plan
    │   │   ├── PlanCarousel.tsx          # Carrusel mobile / grilla desktop
    │   │   └── PriceSummary.tsx          # Card de resumen del seguro
    │   ├── constants/coverageOptions.tsx # Mock de opciones de cobertura
    │   ├── hooks/
    │   │   └── usePlans.ts               # Fetch + filtro por edad + descuento + navegación
    │   ├── types/plan.types.ts           # Tipos del plan
    │   └── utils/calcAge.ts              # Calcula edad desde fecha de nacimiento
    └── users/
        ├── api/getUsers.ts        # Fetch de datos del usuario
        ├── hooks/
        │   └── useLoginForm.ts    # Estados del formulario + submit + navegación
        ├── store/useUserStore.ts  # Store global (Zustand)
        └── types/user.types.ts   # Tipos del usuario
```

## Estado global (Zustand)

El store `useUserStore` centraliza todo el estado de la sesión:

| Campo | Tipo | Descripción |
|---|---|---|
| `currentPage` | `'login' \| 'plans' \| 'summary'` | Página activa (navegación sin router) |
| `documentType` | `'DNI' \| 'CE'` | Tipo de documento ingresado |
| `documentNumber` | `string` | Número de documento |
| `phone` | `string` | Celular |
| `user` | `User \| null` | Respuesta del API `/user` |
| `coverageType` | `'solo' \| 'conAlguien' \| null` | Opción de cobertura elegida |
| `selectedPlan` | `Plan \| null` | Plan seleccionado (precio ya con descuento) |

## Paleta de colores

Definida en `src/index.css` mediante `@theme` de Tailwind v4:

| Token | Hex | Uso |
|---|---|---|
| `background` | `#F8F9FF` | Fondo general |
| `black-100` | `#03050F` | Texto principal |
| `white` | `#FFFFFF` | Fondos de tarjetas |
| `blue` | `#4F4FFF` | Steps activos, acentos |
| `red-button` | `#FF1C44` | Botones primarios, precio del plan |

## Decisiones de diseño

- **Sin react-router-dom**: la navegación se maneja con el campo `currentPage` del store, suficiente para 3 vistas lineales.
- **`enabled: false` + `refetch()`**: el API de usuario solo se llama al enviar el formulario, evitando llamadas automáticas al montar el componente.
- **Descuento en `displayPlans`**: el 5% se aplica antes de pasar los planes al carrusel, por lo que el precio almacenado en el store ya es el precio final sin necesidad de lógica adicional en la vista de resumen.
- **Tailwind v4 `@theme`**: reemplaza `tailwind.config.js`; los tokens de color se definen directamente en CSS y quedan disponibles como clases utilitarias (`bg-blue`, `text-red-button`, etc.).
- **Feature-based folder structure**: cada dominio (`users`, `plans`) agrupa su propia API, tipos, hooks, store y componentes, manteniendo `core/` solo para código verdaderamente compartido.
- **Custom hooks por feature**: `useLoginForm` y `usePlans` encapsulan toda la lógica de negocio y efectos secundarios; las páginas quedan como JSX puro sin `useState` ni `useQuery` directos.
- **AppRouter separado de App**: `App.tsx` solo monta el router; `AppRouter.tsx` es el único lugar donde se mapean páginas a layouts, facilitando agregar nuevas vistas sin tocar el punto de entrada.
