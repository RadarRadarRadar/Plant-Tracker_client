FROM node:12
WORKDIR /app
COPY . .
RUN npm install -g grunt-cli
RUN npm install
RUN npm rebuild node-sass
CMD grunt serve
