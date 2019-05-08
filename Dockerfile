FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3005

CMD ["npm", "run", "dev"]