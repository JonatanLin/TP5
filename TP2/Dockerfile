FROM node:lts-bullseye-slim

WORKDIR /home/node/app

COPY package*.json ./

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

CMD ["node", "app.js"]
