import { FastifyReply, FastifyRequest } from "fastify";

export const authenticateToken = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: Function
) => {
  req.log.info("*** authenticateToken middleware ***");

  req.user = {
    email: "test@example.com",
  };
  next();
};
