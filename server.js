const { createServer } = require("http");
const { parse } = require("url");
const micro = require("micro");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  micro(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    await handle(req, res, parsedUrl);
  }).listen(3000);
});
