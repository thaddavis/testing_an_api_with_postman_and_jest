module.exports = (opts: any) =>
  require("pino-pretty")({
    ...opts,
    ignore: "err.stack,req.hostname,req.remoteAddress,req.remotePort",
    singleLine: true,
    /* Leaving these examples of how to customize `pino-pretty` logging for reference */
    // messageFormat: "{msg} [id={reqId} {req.method} {req.url}]",
    // messageFormat: (log: any, messageKey: any, arg: any) => {
    //   return `${log.msg}`;
    // },
  });
