FROM nginx:1.21.0-alpine as production

COPY . /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3031