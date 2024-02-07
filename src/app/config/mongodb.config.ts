import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

export async function connectToMongo() {
    const uri =process.env.URI
    await mongoose.connect(uri!);
  
  }