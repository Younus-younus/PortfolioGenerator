import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import path from "path";
import cors from "cors";
import multer from "multer";
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
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
const upload = multer({ dest: path.join(__dirname, "uploads") });

const staticFolder = "dist"; // Adjust if your build folder is named differently
app.use(express.static(path.join(__dirname, staticFolder)));

app.use("/uploads", express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".js")) {
            res.setHeader("Content-Type", "application/javascript");
        }
    },
}));



// Routes
app.use("/api/auth", authRoutes); // Group auth-related routes
app.use("/api/resumes", resumeRoutes);

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, staticFolder, "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
