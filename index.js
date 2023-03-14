import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import './database/connectDB.js'
import photoRoutes from "./routes/photo.js";


const app = express();


app.use(cors());

app.use(express.json());

app.use('/api/user/',userRoutes)
app.use('/api/photo/',photoRoutes)

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))