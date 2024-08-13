FROM node:alpine AS build

WORKDIR /home/YMP-Match/frontend_new

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


EXPOSE 3000

CMD ["sh", "-c", "yarn dev"]


