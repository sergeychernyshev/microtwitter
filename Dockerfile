FROM node:latest AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5000

CMD [ "node", "server.js" ]