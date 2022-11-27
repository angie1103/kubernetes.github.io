FROM nginx:1.19-alpine

ADD index.html /usr/share/nginx/html
ADD styles /usr/share/nginx/html
ADD resources /usr/share/nginx/html
ADD code /usr/share/nginx/html
