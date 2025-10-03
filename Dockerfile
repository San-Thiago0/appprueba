# Usa una imagen base oficial de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json antes de copiar el código fuente
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto de la app (3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
