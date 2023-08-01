import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = { data: "Hello, world!", success: true }
  return new Response(JSON.stringify(body));
};
