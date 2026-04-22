import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { initCloudinary } from "./utils/cloudinary.js";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import { globalLimiter } from "./middleware/rateLimiter.js";

const app = express();
initCloudinary();

// ---------- Middlewares ----------
// app.use(cors({ origin: "*" }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://typing.evolvevue.com.np",
      "*",
      "https://vudeviservices.com.np",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(globalLimiter);

// ---------- Database ----------
connectDB();

// ---------- Routes ----------
app.use("/api", applicationRoutes);
app.use("/api/applications", jobRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/results", resultRoutes);

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
