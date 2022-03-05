FROM node:16.14.0-stretch

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json .

RUN yarn && yarn global add --exact typescript tsc

COPY . .

RUN yarn build

WORKDIR /usr/src/app/dist

EXPOSE 3000

CMD [ "node", "src/app.js" ]
