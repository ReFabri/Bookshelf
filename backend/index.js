import express from "express";
const app = express();
import "dotenv/config";
import bookRoutes from "./routes/bookRoutes.js";
import connectToDatabase from "./config/dbConnection.js";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/bookstore", bookRoutes);

app.get("/", (req, res) => {
  res.send(`GET "/" AT PORT ${PORT}`);
});

connectToDatabase()
  .then(() => {
    app.listen(5000, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
