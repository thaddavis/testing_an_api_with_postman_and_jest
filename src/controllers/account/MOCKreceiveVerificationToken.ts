import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "../../db/models/Account";

export const mockReceiveVerificationToken = async (
  req: FastifyRequest<{
    Body: { email: string };
  }>,
  res: FastifyReply
) => {
  if (!process.env.ENABLE_MOCK_ENDPOINTS) res.status(401).send();

  const { email } = req.body;

  const result = await Account.findOne({ email });

  if (result) {
    res.status(200).send(result.verificationToken);
  } else res.status(404).send();
};
