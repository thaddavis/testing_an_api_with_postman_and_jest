import { FastifyReply, FastifyRequest } from "fastify";
import * as argon2 from "argon2";
import { Account } from "../../db/models/Account";

export const signIn = async (
  req: FastifyRequest<{
    Body: { email: string; password: string };
  }>,
  res: FastifyReply
) => {
  const { email, password } = req.body;

  const result = await Account.findOne({ email });

  if (result) {
    const { passwordHash, email } = result;

    if (await argon2.verify(passwordHash, password)) {
      const token = await res.jwtSign({
        email: email,
      });

      res
        .status(200)
        .cookie("jwt", token, {
          sameSite: "strict",
          path: "/",
          expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2),
          httpOnly: true,
        })
        .send();
    } else res.status(401).send();
  } else {
    res.status(404).send();
  }
};
