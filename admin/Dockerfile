FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install axios
RUN npm install react-app-rewired
COPY . .

RUN npm run build

# Cấu hình cho entrypoint
ENTRYPOINT ["sh", "entrypoint.sh"]