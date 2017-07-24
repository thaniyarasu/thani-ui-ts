FROM node:latest AS build
MAINTAINER "Thani<thaniyarasu@gmail.com>"
ADD . /app
WORKDIR /app
RUN npm install -g @angular/cli
RUN npm i
RUN ng build -prod

#CMD ["pub","serve","-b","0.0.0.0","-p","8080"]
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
