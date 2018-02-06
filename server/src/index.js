import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  console.log(matchRoutes(Routes, req.path));
  res.send(renderer(req, store));
});

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
