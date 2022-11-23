import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development.local" });
import fastify, { FastifyInstance } from "fastify";
import pino from "pino";
import { indexRouter } from "./routes/indexRouter";
import { authRouter } from "./routes/authRouter";
import { connectToDb } from "./db/connectToDb";
import { fastifyCookie } from "@fastify/cookie";
import { fastifyJwt } from "@fastify/jwt";
import { customErrorCodes } from "./utility";

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

app.register(fastifyJwt, {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  secret: process.env.JWT_SECRET!,
  cookie: {
    cookieName: "jwt",
    signed: false,
  },
});
app.register(fastifyCookie);
app.register(indexRouter, { prefix: "" });
app.register(authRouter, { prefix: "auth-api" });

app.setErrorHandler((err, req, res) => {
  req.log.error(err);

  if (err.validation) {
    res.status(422).send();
    return;
  }

  if (err.code === customErrorCodes.FST_JWT_NO_AUTHORIZATION_IN_COOKIE) {
    res.status(401).send();
    return;
  }

  res.status(500).send();
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
app.listen({ port: Number.parseInt(process.env.PORT!) }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
