FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force # Consider removing --force if possible

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]