import { FastifyInstance } from "fastify";
import { authenticateToken } from "../middleware/authenticateToken";
import {
  signupSchema,
  signinSchema,
  isAuthedSchema,
} from "../schema/authSchema";
import * as controllers from "../controllers";

const authRouter = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "POST",
    url: "/sign-up",
    schema: signupSchema,
    handler: controllers.account.signUp,
  });

  fastify.route({
    method: "POST",
    url: "/sign-in",
    schema: signinSchema,
    handler: controllers.account.signIn,
  });

  fastify.route({
    method: "GET",
    url: "/is-authed",
    schema: isAuthedSchema,
    preHandler: [authenticateToken],
    handler: controllers.account.isAuthed,
  });
};

export { authRouter };
