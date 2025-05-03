FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force

RUN npm install class-validator --force

COPY . .

RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000

CMD [ "node", "dist/main" ]