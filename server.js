const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

app.prepare().then(() => {
  const server = express();

  server.get("/", async (req, res) => {
    await renderAndCache(req, res, "/");
  });

  server.get("/blog", async (req, res) => {
    await renderAndCache(req, res, "/blog");
  });

  server.get("/2017/:page", async (req, res) => {
    await renderAndCache(req, res, `/2017/${req.params.page}`);
  });

  server.get("*", async (req, res) => {
    await handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  if (ssrCache.has(key)) {
    // console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}
