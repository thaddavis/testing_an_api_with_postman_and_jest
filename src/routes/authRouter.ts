import { FastifyInstance } from "fastify";
import { authenticateToken } from "../middleware/authenticateToken";
import {
  signupSchema,
  signinSchema,
  isAuthedSchema,
  requestPasswordResetSchema,
  verifyAccountSchema,
  resetPasswordSchema,
  mockRequestPasswordResetSchema,
  mockReceiveVerificationTokenSchema
} from "../schema/authSchema";
import * as controllers from "../controllers";

const authRouter = async (fastify: FastifyInstance) => {
  
  fastify.route({ method: "POST", url: "/sign-up", schema: signupSchema, handler: controllers.account.signUp });
  fastify.route({ method: "POST", url: "/sign-in", schema: signinSchema, handler: controllers.account.signIn });
  fastify.route({ method: "GET", url: "/is-authed", schema: isAuthedSchema, preHandler: [authenticateToken], handler: controllers.account.isAuthed });
  fastify.route({ method: "POST", url: "/request-password-reset", schema: requestPasswordResetSchema, handler: controllers.account.requestPasswordReset });
  fastify.route({ method: "POST", url: "/reset-password", schema: resetPasswordSchema, handler: controllers.account.resetPassword });
  fastify.route({ method: "POST", url: "/verify-account", schema: verifyAccountSchema, handler: controllers.account.verifyAccount });
  fastify.route({ method: "DELETE", url: "/sign-out", preHandler: [authenticateToken], handler: controllers.account.signOut });
  fastify.route({ method: "DELETE", url: "/delete-account", preHandler: [authenticateToken], handler: controllers.account.deleteAccount });

  fastify.route({ method: "POST", url: "/mock-request-password-reset", schema: mockRequestPasswordResetSchema, handler: controllers.account.mockRequestPasswordReset });
  fastify.route({ method: "POST", url: "/mock-receive-verification-token", schema: mockReceiveVerificationTokenSchema, handler: controllers.account.mockReceiveVerificationToken });

};

export { authRouter };
