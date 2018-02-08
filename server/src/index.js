import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

/* eslint no-param-reassign: 0 */
app.use(
  "/api",
  proxy("http://localhost:5001", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:5000";
      return opts;
    }
  })
);

app.use(express.static("public"));

/* eslint no-unused-expressions: 0 */
app.get("*", async (req, res) => {
  const store = createStore(req);
  await Promise.all(
    matchRoutes(Routes, req.path)
      .map(({ route }) => (route.loadData ? route.loadData(store) : null))
      .map(promise => {
        if (promise) {
          return new Promise(resolve => {
            promise.then(resolve).catch(resolve);
          });
        }
      })
  );

  const context = {};
  const content = renderer(req, store, context);
  if (context.url) {
    res.redirect(301, context.url);
  }
  context.notFound ? res.status(404).send(content) : res.send(content);
});

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
