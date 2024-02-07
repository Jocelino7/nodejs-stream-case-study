import express from "express"
import characterRouter from "./src/app/characters/routes/characters"
import { connectToMongo } from "./src/app/config/mongodb.config";
import mongoose from "mongoose";
mongoose.connection.once("open",()=>{
    console.log("mongoose connected")
})
mongoose.connection.on("error",(error)=>{
    console.error(error)
})
connectToMongo().catch(console.dir);
const app = express()

app.use(express.json())
app.use(characterRouter)
const port = 3000
app.listen(port,()=>{
    console.log(`Listeninig in port ${port}`)
})