import { connect } from "mongoose";

export async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("Successfully Connected to Database");
  } catch (error) {
    console.log("Database connection failed");
  }
}
