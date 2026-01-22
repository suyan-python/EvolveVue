import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// ---------- Middlewares ----------
app.use(cors({ origin: "*" }));
app.use(express.json());

// ---------- Database ----------
connectDB();

// ---------- Routes ----------
app.use("/api/applications", jobRoutes);
app.use("/api/admin", adminRoutes);

// ---------- Static Files ----------
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`),
);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
