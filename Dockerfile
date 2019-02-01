FROM node:8.9-alpine as client-app
WORKDIR  /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build:prod

FROM node:8.9-alpine as node-server
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY backend /usr/src/app

# Final image
FROM node:8.9-alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
COPY --from=client-app /usr/src/app/dist ./
EXPOSE 3000
CMD ["node", "index.js"]
