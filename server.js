import express from "express";
import cors from 'cors'
import dotenv from 'dotenv/config'
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import notificationRoutes from './routes/notification.route.js'


const app = express();

app.use(cors())
app.use(express.json());
app.use(clerkMiddleware())





app.get("/", (req, res) => res.send("Hello from server"));


app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);


const startServer = async () => {
    try {
        await connectDB();


        app.listen(process.env.PORT, () => console.log("Server is up and running on PORT:", process.env.PORT));

    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();

