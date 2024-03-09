FROM node:latest AS build

WORKDIR /app

COPY dist/ .
COPY package.json .

RUN npm install --omit=dev
RUN npm run build
