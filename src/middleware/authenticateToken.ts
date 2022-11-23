import { FastifyReply, FastifyRequest } from "fastify";

export const authenticateToken = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: Function
) => {
  req.log.info("*** authenticateToken middleware ***");

  try {
    await req.jwtVerify();
    next();
  } catch (err) {
    throw err;
  }
};
