/* eslint-disable @typescript-eslint/no-unused-vars */
import fastify from "fastify";
import Emails from "./src/emails";
declare module "fastify" {
  export interface FastifyRequest {
    user: { email: string };
  }
}
