import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const isAuthed = async (req: FastifyRequest, res: FastifyReply) => {
  let { email } = req.user;

  //   const result = await Account.findOne({
  //     email,
  //   });

  // if (email) {
  //   // await result.save();

  //   res.status(200).send();
  // } else {
  //   res.status(404).send();
  // }

  res.status(401).send();
};
