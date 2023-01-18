FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]




# docker rm node-app -f (extra for readme )