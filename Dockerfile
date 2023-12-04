FROM alpine

WORKDIR /abdo

COPY abdo.js .
RUN apk add --update nodejs 
RUN apk add --update npm 

CMD node abdo.js