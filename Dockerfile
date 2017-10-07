FROM node:8.5.0
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
EXPOSE 3001
CMD ["npm", "run", "serve.dev"]
