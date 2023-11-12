import express from "express";
const app = express();
import "dotenv/config";

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`GET "/" AT PORT ${PORT}`);
});

app.listen(5000, () => {
  console.log(`Server started at port ${PORT}`);
});
