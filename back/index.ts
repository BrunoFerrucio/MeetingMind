const server = Bun.serve({
  port: Bun.env.PORT,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);