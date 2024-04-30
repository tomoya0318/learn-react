FROM node:18.12.1-alpine

WORKDIR /works

COPY ./.yarnrc.yml ./package.json ./yarn.lock ./

RUN corepack enable
RUN yarn install

COPY . /works/

CMD [ "yarn", "dev" ]