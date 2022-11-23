import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "../../db/models/Account";

export const deleteAccount = async (req: FastifyRequest, res: FastifyReply) => {
  const { email } = req.user;

  if (email) {
    const result = await Account.deleteOne({ email });

    const { deletedCount } = result;

    if (deletedCount === 1) {
      res.status(200).clearCookie("jwt").send();
    } else {
      res.status(404).clearCookie("jwt").send();
    }
  } else {
    res.status(401).clearCookie("jwt").send();
  }
};
