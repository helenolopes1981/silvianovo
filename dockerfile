# Stage 1: Build
FROM node:20-alpine AS build

# Instalar dependências de compilação
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copiar build do stage anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração otimizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
