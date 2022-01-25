FROM node:16-alpine AS dependencies

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=dependencies /usr/src/app/build ./build

EXPOSE 3000

CMD ["node", "build/index.js"]
