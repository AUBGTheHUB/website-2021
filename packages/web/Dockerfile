FROM node:16.14.0-stretch

WORKDIR /usr/src/app

RUN apt update && apt install -y xsel

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

RUN yarn global add serve --exact

EXPOSE 443

CMD ["/bin/sh", "entrypoint.sh"]
