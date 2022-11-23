import { FastifyReply, FastifyRequest } from "fastify";
import { v4 } from "uuid";
import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import { Account } from "../../db/models/Account";
import { emailConfigGen } from "../../emails";

const sesClient = new SESClient({ region: process.env.REGION });

export const requestPasswordReset = async (
  req: FastifyRequest<{
    Body: { email: string };
  }>,
  res: FastifyReply
) => {
  const { email } = req.body;

  const result = await Account.findOne({
    email,
  });

  if (result) {
    // generate the reset password token
    const resetToken = v4();
    result.resetPasswordToken = resetToken;
    await result.save();
    const resetLink = `${process.env.FRONTEND_HOST}/resetPassword`;
    // and send the email
    const emailConfig = emailConfigGen.generateResetPasswordConfigSes(
      email,
      resetLink,
      resetToken
    );
    await sesClient.send(new SendTemplatedEmailCommand(emailConfig));
    res.status(200).send();
  } else res.status(404).send();
};
