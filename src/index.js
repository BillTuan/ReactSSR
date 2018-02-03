const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const Home = require("./client/components/Home").default;

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
