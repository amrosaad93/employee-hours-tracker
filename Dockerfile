FROM node:alpine
WORKDIR '/app'

COPY . /app
RUN npm install
RUN npm install -g json-server

RUN json-server --watch db.json --port 8000

EXPOSE 3000


CMD ["npm", "start"]

