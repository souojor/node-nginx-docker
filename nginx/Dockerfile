FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

#docker network create laranet
#docker build -t souojor/nginx:prod . -f Dockerfile.prod 
#docker run -d --network laranet --name nginx -p 8080:80 souojor/nginx:prod