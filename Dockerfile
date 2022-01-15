FROM node:12.13-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]   