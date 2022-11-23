import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "../../db/models/Account";

export const isAuthed = async (req: FastifyRequest, res: FastifyReply) => {
  const { email } = req.user;

  req.log.info(email);

  const result = await Account.findOne({
    email,
  });

  if (result) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
};
