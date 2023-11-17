import express from "express";
const app = express();
import "dotenv/config";
import bookRoutes from "./routes/bookRoutes.js";
import connectToDatabase from "./config/dbConnection.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/bookstore", bookRoutes);

connectToDatabase()
  .then(() => {
    app.listen(5000, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
