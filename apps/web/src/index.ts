import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.html("<h1>test-bun-workspaces-fanout</h1>"));
app.get("/health", (c) => c.json({ ok: true }));

const port = Number(process.env.PORT ?? 8000);
console.log(`Listening on :${port}`);

export default {
  port,
  fetch: app.fetch,
  hostname: "0.0.0.0",
};
