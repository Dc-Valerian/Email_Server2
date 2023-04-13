import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/email_server";

export const dbConfig = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`DataBase connected to: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};
