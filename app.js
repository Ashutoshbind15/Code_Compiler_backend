import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())

app.post('/submissions',() => {
    
})

app.listen(PORT, () => {
  console.log(`Listening to ${PORT} port`);
});
