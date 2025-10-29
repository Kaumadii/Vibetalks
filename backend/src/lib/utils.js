import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  // Create JWT
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });

  // Set JWT cookie
  res.cookie("jwt", token, {
    httpOnly: true, // prevent client-side JS access
    secure: process.env.NODE_ENV === "production", // only HTTPS in prod
    sameSite: "lax", // allows local dev
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // ✅ just return token, no response here
  return token;
};

