import express from "express";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// Constants
const PORT = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

// Connect to the database
connectDB();

// Create/initialize the express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());
// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(notFound);
app.use(errorHandler);
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
