# Micro Twitter

Local micro-blogging server

## Run production image locally in Docker

### Build Docker image

```
npm run docker:image:build
```

### Run Docker container using the image

```
npm run docker:container:run
```

## Local development

`npm install` to install dependencies

To run hot reloading for both client and server code:

### Start API node server

```
npm run dev:server
```

### Start webpack dev server for client code

```
npm run dev:client
```

It will open a browser window at `http://localhost:8080` with your application
