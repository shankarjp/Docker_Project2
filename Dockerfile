FROM node:alpine

WORKDIR /usr/project2

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
