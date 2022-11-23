import mongoose from "mongoose";

export function connectToDb() {
  try {
    console.log("connectToDb");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    mongoose.connect(process.env.MONGODB_URI!);
  } catch (e) {
    console.error(e);
  }
}
