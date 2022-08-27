FROM node:16-alpine AS dependencies

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

FROM node:16-alpine AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production --ignore-scripts

COPY . .

COPY --from=dependencies /usr/src/app/build ./build

EXPOSE 3000

CMD ["npm", "run", "run:server"]
