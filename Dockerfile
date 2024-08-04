FROM node:20-alpine

WORKDIR /app

COPY . .

RUN cd /app && npm install

EXPOSE 3000

CMD ["npm", "run", "prod"]