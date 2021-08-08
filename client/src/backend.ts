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
  })
);

worker.start();
