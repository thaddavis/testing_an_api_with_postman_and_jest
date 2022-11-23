import { FastifyReply, FastifyRequest } from "fastify";
import * as argon2 from "argon2";
import { v4 } from "uuid";
import { Account } from "../../db/models/Account";

export const signUp = async (
  req: FastifyRequest<{
    Body: { name: string; email: string; password: string };
  }>,
  res: FastifyReply
) => {
  const { name, email, password } = req.body;

  const passwordHash = await argon2.hash(password);
  const verificationToken = v4();

  const newAccount = new Account({
    name,
    email,
    passwordHash,
    verificationToken,
  });

  await newAccount.save();

  res.status(200).send();
};
