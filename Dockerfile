FROM node:latest
WORKDIR /app

EXPOSE 19000
EXPOSE 19001

RUN apt-get update && \
    apt-get install -y android-tools-adb
