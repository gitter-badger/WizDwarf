

FROM golang:latest

ENV GO111MODULE=on

ENV GOFLAGS= mod=vendor

LABEL maintainer="Ali Hassan <Alideveloper95@protonmail.com>"

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go get -u -d ./...

RUN go build -o wiz

EXPOSE 9101