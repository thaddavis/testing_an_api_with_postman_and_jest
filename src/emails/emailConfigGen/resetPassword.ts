export function generateResetPasswordConfigSes(
  email: string,
  resetLink: string,
  resetToken: string
) {
  return {
    Destination: {
      CcAddresses: [],
      ToAddresses: [email],
    },
    Source: "CMDSoftware.io <admin@cmdsoftware.io>",
    Template: "CMD_GENERIC_EMAIL",
    TemplateData: `
            { 
                "SUBJECT":"Reset Password", 
                "MESSAGE_AS_TEXT":"Reset Password",
                "GREETING":"Password Reset Requested",
                "MESSAGE":"Reset Link: ${resetLink} Reset Token: ${resetToken}",
                "ENDING":"Good Luck!"
            }
        `,
    ReplyToAddresses: ["no-reply@cmdsoftware.io"],
    ConfigurationSetName: "Email_Delivery_Status",
    Tags: [
      {
        Name: "BatchId",
        Value: "CMD",
      },
    ],
  };
}
