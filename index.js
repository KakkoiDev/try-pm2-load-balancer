import express from "express";

const app = express();
const port = 3000;

app.get("/load", (_req, res) => {
  let total = 0;

  for (let i = 0; i < 10_0000_000; i++) {
    total++;
  }

  res.send(`Total calculations: ${total}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`worker pid: ${process.pid}`);
});
