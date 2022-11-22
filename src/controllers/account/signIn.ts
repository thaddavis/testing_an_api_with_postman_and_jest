import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authenticateToken } from "../../middleware/authenticateToken";
import * as argon2 from "argon2";
import { v4 } from "uuid";

export const signIn = async (
  req: FastifyRequest<{
    Body: { email: string; password: string };
  }>,
  res: FastifyReply
) => {
  const { email, password } = req.body;

  // const result = await Account.findOne({ email, verified: true });

  if (false) {
    // const { passwordHash } = result;

    if (
      await argon2.verify(
        "$argon2i$v=19$m=4096,t=3,p=1$wHngEd/83oYjIMMAEpXOtw$+mtSjdGkvQhXPExjsp/m3A0vbfLD+Gt9STdtm/57gZA",
        // "",
        password
      )
    ) {
      // const token = generateAccessToken({ email });
      res
        .status(200)
        // .cookie("jwt", token, {
        //   sameSite: "strict",
        //   path: "/",
        //   expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2),
        //   httpOnly: true,
        // })
        .send();
    } else res.status(401).send();
  } else {
    res.status(404).send();
  }
};
