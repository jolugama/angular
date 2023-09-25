# Usar una imagen oficial de Node.js como base para construir la aplicación
FROM node:18 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Usar una imagen de nginx para servir la aplicación
FROM nginx:alpine

# Copiar la aplicación construida desde la imagen de construcción
COPY --from=build /app/dist/super-hero /usr/share/nginx/html
