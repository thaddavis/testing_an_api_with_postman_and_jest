import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "../../db/models/Account";

export const verifyAccount = async (
  req: FastifyRequest<{
    Body: { email: string; verificationToken: string };
  }>,
  res: FastifyReply
) => {
  const { email, verificationToken } = req.body;

  const result = await Account.findOne({
    email,
    verificationToken,
  });

  if (result) {
    result.verified = true;
    result.verificationToken = null;
    await result.save();
    res.status(200).send();
  } else {
    res.status(404).send();
  }
};
