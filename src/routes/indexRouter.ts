import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const indexRouter = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/healthcheck",
    handler: async (req: FastifyRequest, res: FastifyReply) => {
      return res.status(200).send();
    },
  });
};

export { indexRouter };
