import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// Admin login
export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
      expiresIn: "8h",
    });
    return res.json({ success: true, token });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
};

// Middleware to verify admin token
export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token invalid or expired" });
  }
};
