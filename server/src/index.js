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

app.get("*", async (req, res) => {
  const store = createStore(req);
  await Promise.all(
    matchRoutes(Routes, req.path).map(
      ({ route }) => (route.loadData ? route.loadData(store) : null)
    )
  );
  res.send(renderer(req, store));
});

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
