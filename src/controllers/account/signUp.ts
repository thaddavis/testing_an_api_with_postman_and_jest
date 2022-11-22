import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authenticateToken } from "../../middleware/authenticateToken";
import * as argon2 from "argon2";
import { v4 } from "uuid";

export const signUp = async (
  req: FastifyRequest<{
    Body: { name: string; email: string; password: string };
  }>,
  res: FastifyReply
) => {
  const { name, email, password } = req.body;

  const passwordHash = await argon2.hash(password);
  const verificationToken = v4();

  req.log.info(`passwordHash: ${passwordHash}`);
  req.log.info(`verificationToken: ${verificationToken}`);

  return res.status(200).send();
};
