import { FastifyRequest } from "fastify";

export const authenticateToken = async (req: FastifyRequest) => {
  req.log.info("*** authenticateToken middleware ***");
  await req.jwtVerify();
};
