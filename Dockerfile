#   Botdamnit
#   Discord bot Dockerized

FROM node:lts-alpine

COPY . /bot

WORKDIR /bot

RUN npm install -g typescript

RUN npm install

RUN tsc -p tsconfig.json

RUN export DEBUG='*'

VOLUME "/bot"

CMD ["node", "./dist/main.js"]