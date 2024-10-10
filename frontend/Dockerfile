FROM node:21.7.3

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install axios
RUN npm install react-app-rewired
COPY . .

RUN npm run build

# Cấu hình cho entrypoint
ENTRYPOINT ["sh", "entrypoint.sh"]