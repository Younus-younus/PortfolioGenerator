import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import path from "path";
import cors from "cors";
import multer from "multer";
import methodOverride from "method-override";
import { v4 as uuidv4 } from "uuid";
import flash from "connect-flash";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(
    cors({
        origin: "http://localhost:5173", // React dev server
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Static directory for uploads
app.use("/api/resumes/uploads", express.static("uploads"));

// Routes
app.use("/api", authRoutes);
app.use("/new", resumeRoutes);
app.use("/api/resumes", resumeRoutes);

// Catch-all route to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // Adjust "dist" to your React build folder
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
