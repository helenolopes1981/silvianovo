# Stage 1: Build
FROM node:20-alpine AS build

# Instalar dependências de compilação
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# IMPORTANTE: Usar npm install em vez de npm ci para evitar
# necessidade de package-lock.json no repositório
RUN npm install

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
