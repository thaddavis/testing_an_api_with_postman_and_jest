import { FastifyReply, FastifyRequest } from "fastify";
import { v4 } from "uuid";
import { Account } from "../../db/models/Account";

export const mockRequestPasswordReset = async (
  req: FastifyRequest<{
    Body: { email: string };
  }>,
  res: FastifyReply
) => {
  if (!process.env.ENABLE_MOCK_ENDPOINTS) res.status(401).send();

  const { email } = req.body;

  const result = await Account.findOne({ email });

  if (result) {
    // generate the reset password token
    const UUID = v4();
    result.resetPasswordToken = UUID;
    await result.save();

    res.status(200).send({
      resetToken: UUID,
    });
  } else res.status(404).send();
};
