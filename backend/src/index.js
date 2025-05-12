import mongoose from "mongoose"
import connectDB from "./db/index.js";
import dotenv fro "dotenv"

dovev.config({
    path: './env'
})

connectDB()