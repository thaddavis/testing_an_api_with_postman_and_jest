import S from "fluent-json-schema";

export const signupSchema = {
  body: S.object()
    .prop("name", S.string().required())
    .prop("email", S.string().required())
    .prop("password", S.string().minLength(3).required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const signinSchema = {
  body: S.object()
    .prop("email", S.string().required())
    .prop("password", S.string().minLength(3).required()),
};

export const isAuthedSchema = {};

export const requestPasswordResetSchema = {
  body: S.object().prop("email", S.string().required()),
};

export const verifyAccountSchema = {
  body: S.object()
    .prop("email", S.string().required())
    .prop("verificationToken", S.string().required()),
};

export const resetPasswordSchema = {
  body: S.object()
    .prop("email", S.string().required())
    .prop("resetPasswordToken", S.string().required())
    .prop("newPassword", S.string().required()),
};

export const mockRequestPasswordResetSchema = {
  body: S.object().prop("email", S.string().required()),
};

export const mockReceiveVerificationTokenSchema = {
  body: S.object().prop("email", S.string().required()),
};
