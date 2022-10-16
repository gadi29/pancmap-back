FROM node:16

WORKDIR /usr/src

COPY . .

RUN npm i
RUN npm run build:docker

EXPOSE 5000

CMD ["npm", "start:docker"]