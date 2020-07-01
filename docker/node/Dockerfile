FROM node:12

WORKDIR /usr/src/app

COPY ./src /usr/src/app/src
COPY ./package.json ./package-lock.json ./.env ./.env.development ./.env.test ./.sequelizerc /usr/src/app/

ENV NODE_ENV=development

RUN npm install
RUN npm install nodemon sequelize-cli webpack-cli --global
RUN npm run build
