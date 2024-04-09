FROM node:18.12.1-alpine

WORKDIR /works

COPY ./package.json ./package-lock.json /works/

RUN npm install

COPY . /works/

CMD [ "npm", "start" ]