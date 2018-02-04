import express from "express";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer());
});

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
