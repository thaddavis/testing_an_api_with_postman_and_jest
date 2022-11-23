import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "../../db/models/Account";

export const signOut = async function (req: FastifyRequest, res: FastifyReply) {
  const { email } = req.user;

  const result = await Account.findOne({
    email,
  });

  if (result) {
    res.status(200).clearCookie("jwt").send();
  } else res.status(404).clearCookie("jwt").send();
};
