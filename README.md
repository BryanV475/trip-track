# TripTrack

TripTrack es una aplicación para la gestión y aprobación de viáticos incurridos en viajes nacionales o internacionales.

## Índice
1. [Entorno de desarrollo](#entorno-de-desarrollo)
2. [Estructura del Proyecto](#estructura-del-proyecto)
   - [Backend](#backend)
     - [Dependencias](#dependencias)
   - [Frontend](#frontend)
     - [Dependencias](#dependencias-1)
3. [Instrucciones de Despliegue](#instrucciones-de-despliegue)
   - [Backend](#backend-1)
   - [Frontend](#frontend-1)
4. [Funcionalidades](#funcionalidades)
   - [Backend](#backend-2)
   - [Frontend](#frontend-2)
5. [Consideraciones](#consideraciones)
   - [Ingreso de información de viáticos](#ingreso-de-información-de-viáticos)
   - [Aprobación de los viáticos](#aprobación-de-los-viáticos)
6. [Información sobre el Proyecto](#información-sobre-el-proyecto)
   - [Diagrama Entidad-Relación](#diagrama-entidad-relación)
   - [Endpoints](#endpoints)

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

## Frontend
El frontend está desarrollado con el Next.js y proporciona una interfaz de usuario para gestionar y aprobar viáticos.

### Dependencias
Las principales dependencias utilizadas en el frontend son:

- Next.js
- React
- Axios
- Tailwind CSS

## Instrucciones de Despliegue

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
La aplicación estará disponible en http://localhost:3000

## Funcionalidades

### Backend
- **Gestión de Viáticos**: Permite crear, actualizar y listar viáticos.
- **Aprobación de Viáticos**: Permite aprobar viáticos.

### Frontend
- **Gestión de Viáticos**: Interfaz para que los usuarios puedan crear y actualizar viáticos.
- **Panel de Aprobación**: Interfaz para que los usuarios puedan aprobar viáticos.

## Consideraciones

### Ingreso de información de viáticos
El ingreso de información debe tener las siguientes secciones:
2. Nombre de la persona que ingresa el viático
3. Identificación de la persona que ingresa el viático (cédula o pasaporte)
1. Fecha de registro del viático
3. Motivo del viaje
4. Nombre del cliente o proyecto
5. Tipo de viaje (nacional o internacional)
5. Fecha del viaje (en caso de viáticos internacionales)
6. Fecha de invitación (en caso de viáticos nacionales)

### Aprobación de los viáticos
La aprobación de un viático debe tener las siguientes secciones:
1. El nombre de quien aprueba el viático
2. La identificación de quien aprueba el viático (cédula o pasaporte)
3. El email de quien aprueba el viático

## Información sobre el Proyecto

### Diagrama Entidad-Relación

![Diagram](https://github.com/user-attachments/assets/b0976106-d8e4-4e30-8781-4e879b86c134)

### Endpoints

- **Obtener todos los viáticos**
  - **URL**: `/api/expenses`
  - **Método**: `GET`
  - **Descripción**: Obtiene una lista de todos los viáticos.

- **Obtener un viático por ID**
  - **URL**: `/api/expenses/{id}`
  - **Método**: `GET`
  - **Descripción**: Obtiene un viático por su ID.

- **Obtener viáticos por estado**
  - **URL**: `/api/expenses/status/{status}`
  - **Método**: `GET`
  - **Descripción**: Obtiene una lista de viáticos por su estado.

- **Obtener viáticos por autor**
  - **URL**: `/api/expenses/author/{authorId}`
  - **Método**: `GET`
  - **Descripción**: Obtiene una lista de viáticos por el ID del autor.

- **Crear un nuevo viático**
  - **URL**: `/api/expenses`
  - **Método**: `POST`
  - **Descripción**: Crea un nuevo viático.

- **Actualizar un viático**
  - **URL**: `/api/expenses/{id}`
  - **Método**: `PUT`
  - **Descripción**: Actualiza un viático existente.

- **Obtener aprobación por ID de viático**
  - **URL**: `/api/approvals/expense/{expenseId}`
  - **Método**: `GET`
  - **Descripción**: Obtiene la aprobación de un viático por su ID.

- **Crear una aprobación para un viático**
  - **URL**: `/api/approvals/expense/{expenseId}`
  - **Método**: `POST`
  - **Descripción**: Crea una aprobación para un viático.
