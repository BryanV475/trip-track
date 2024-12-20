# TripTrack

TripTrack es una aplicación para la gestión y aprobación de viáticos incurridos en viajes nacionales o internacionales.

La aplicación está dividida en dos partes: 
1. Backend desarrollado con **Spring Boot** 
2. Frontend desarrollado con **React** usando el Framework Next.js.

## Entorno de desarrollo
- Java
  ```bash
   java 21.0.5 2024-10-15 LTS
  ```
  
- NodeJs
   ```bash
   v22.12.0
   ```
   
## Estructura del Proyecto

## Backend

El backend está desarrollado con Spring Boot y proporciona una API REST para gestionar viáticos y aprobaciones.

### Dependencias

Las principales dependencias utilizadas en el backend son:

- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- H2 Database
- Lombok

# Frontend
El frontend está desarrollado con el Next.js y proporciona una interfaz de usuario para gestionar y aprobar viáticos.

### Dependencias
Las principales dependencias utilizadas en el frontend son:

- Next.js
- React
- Axios
- Tailwind CSS

# Instrucciones de Despliegue

Primero clona el repositorio:
   ```bash
   git clone https://github.com/BryanV475/trip-track
   ```

### Backend

1. Navega al directorio del backend en la terminal:
   ```bash
   cd trip-track/triptrack_backend
   ```
2. Construye el proyecto con Maven:
   ```bash
   ./mvnw clean install
   ```
3. Ejecuta la aplicación:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend

1. Navega al directorio del frontend desde otro terminal:
   ```bash
   cd trip-track/triptrack_frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
 3. Construye la aplicación con Node:
    ```bash
     npm run build
    ```
3. Ejecuta la aplicación:
   ```bash
   npm run install
   ```

# Diagrama de Clases

![Untitled](https://github.com/user-attachments/assets/b0976106-d8e4-4e30-8781-4e879b86c134)

La aplicación estará disponible en http://localhost:3000
