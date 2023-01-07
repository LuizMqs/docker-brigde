FROM postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB db
COPY ./database/Contatos.sql /docker-entrypoint-initdb.d/

FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8088
CMD ["node", "server/server.js"]

