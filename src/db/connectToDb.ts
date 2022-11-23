import mongoose from "mongoose";

export function connectToDb() {
  try {
    console.log("connectToDb");
    mongoose.connect(`mongodb://localhost:27017/auth-api`);
  } catch (e) {
    console.error(e);
  }
}
