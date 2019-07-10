FROM node:8 as build
WORKDIR /w
COPY package*.json ./
RUN npm install -q
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /w/dist/ /usr/share/nginx/html/
