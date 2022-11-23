import fastify, { FastifyInstance } from "fastify";
import pino from "pino";
import { indexRouter } from "./routes/indexRouter";
import { authRouter } from "./routes/authRouter";
import { connectToDb } from "./db/connectToDb";

const logger = pino({
  transport: {
    target: "./logger/pino-pretty-transport",
    options: {
      colorize: true,
    },
  },
});

connectToDb();

const app: FastifyInstance = fastify({
  logger: logger,
});

app.register(require("@fastify/jwt"), {
  secret: "supersecret",
});
app.register(indexRouter, { prefix: "" });
app.register(authRouter, { prefix: "auth-api" });

app.setErrorHandler((err, req, res) => {
  req.log.error(err);

  if (err.validation) {
    res.status(422).send();
    return;
  }

  res.status(500).send();
});

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});
