import { setupWorker, rest } from "msw";

const posts = [
  { id: 1, title: "Hello world" },
  { id: 2, title: "Foo Bar" },
];

const networkDelay = () =>
  new Promise((res) => setTimeout(res, Math.random() * 1000));

const worker = setupWorker(
  rest.get("/api/posts", async (_, res, ctx) => {
    await networkDelay();
    return res(ctx.json(posts));
  }),
  rest.get("/api/post/admin", async (_, res, ctx) => {
    await networkDelay();
    return res(ctx.status(401));
  }),
  rest.get("/api/posts/*", async (_, res, ctx) => {
    await networkDelay();
    return res(ctx.status(404));
  }),
  rest.post<{ title: string }>("/api/post", async (req, res, ctx) => {
    await networkDelay();
    posts.push({
      id: Math.max(...posts.map(({ id }) => id)) + 1,
      title: req.body?.title || "No title",
    });
    return res(ctx.status(201));
  })
);

worker.start();
