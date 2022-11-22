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
