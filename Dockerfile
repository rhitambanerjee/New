From node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm i
RUN npm install -g serve
RUN serve -s build
COPY . /app
CMD serve -s build -l 3000

