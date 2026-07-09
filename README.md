# Rick and Morty Favorites

Aplicación desarrollada con React y Vite para explorar personajes de Rick and Morty, buscarlos, marcarlos como favoritos y bloquearlos desde una interfaz sencilla y responsiva.

## Descripción del proyecto

Esta app consume la API pública de Rick and Morty y muestra una lista de personajes. El usuario puede:

- Buscar personajes por nombre.
- Agregar o quitar personajes de favoritos.
- Bloquear personajes para que no aparezcan en la lista principal.
- Ver estadísticas generales del estado actual de la aplicación.

La interfaz está dividida en tres áreas principales:

- Lista de personajes.
- Panel de favoritos.
- Panel de personajes bloqueados.

## Estructura del proyecto

```text
src/
  App.jsx              # Componente principal que maneja la lógica general
  App.css              # Estilos globales de la aplicación
  main.jsx             # Punto de entrada de React
  components/          # Componentes reutilizables de la UI
  hooks/               # Hooks personalizados
```

## Componentes principales

### App
El componente principal se encarga de:

- Obtener los personajes desde la API mediante el hook useFetch.
- Gestionar el término de búsqueda.
- Administrar los IDs de favoritos y bloqueados con useLocalStorage.
- Filtrar la lista de personajes según el texto buscado y los bloqueados.
- Pasar los datos y callbacks a los componentes secundarios.

### SearchBar
Permite al usuario escribir texto para filtrar los personajes en tiempo real.

### CharacterList
Renderiza la lista de personajes filtrados. Si no hay resultados, muestra un mensaje indicando que no se encontraron coincidencias.

### CharacterCard
Representa cada personaje con:

- Imagen del personaje.
- Nombre.
- Estado y especie.
- Botones para añadir/quitar favorito y bloquear/desbloquear.

### FavoritesPanel
Muestra los personajes que el usuario ha marcado como favoritos.

### BlockedPanel
Muestra los personajes bloqueados y permite desbloquearlos desde ahí.

### Stats
Muestra estadísticas rápidas de:

- Total de personajes cargados.
- Cantidad de favoritos.
- Cantidad de personajes bloqueados.

## Hooks personalizados

### useFetch
Hook encargado de realizar la petición a la API de Rick and Morty y devolver:

- `data`: la respuesta obtenida.
- `loading`: si la solicitud sigue en curso.
- `error`: si ocurre algún problema.

### useLocalStorage
Hook que guarda y recupera valores desde localStorage, permitiendo que favoritos y bloqueados persistan al recargar la página.

## Flujo de la aplicación

1. Al cargar la app, se obtiene la lista de personajes desde la API.
2. El usuario puede escribir en el buscador para filtrar personajes.
3. Cada personaje puede ser marcado como favorito o bloqueado.
4. Los cambios se guardan en localStorage para conservar el estado entre sesiones.
5. La UI se actualiza automáticamente según los datos cambiantes.

## Instalación y ejecución

### Requisitos

- Node.js 18 o superior.
- npm o pnpm.

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Construir para producción

```bash
npm run build
```

## Tecnologías usadas

- React
- Vite
- CSS Modules-style custom CSS
- localStorage para persistencia local
- API pública de Rick and Morty

## Notas de desarrollo

El proyecto sigue una estructura simple y modular, lo que facilita:

- Añadir nuevos componentes.
- Mantener la lógica de estado separada de la UI.
- Extender la app con nuevas funcionalidades como filtros avanzados o detalles del personaje.
