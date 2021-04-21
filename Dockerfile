# Dockerfile for client Dalenta

FROM node:10.16-alpine

WORKDIR /usr/src/app

ARG NODE_ENV

ENV NODE_ENV $NODE_ENV

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm","start"]
