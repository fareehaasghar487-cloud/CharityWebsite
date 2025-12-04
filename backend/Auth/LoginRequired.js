import { getUser } from "./jwt.js";

export const LoginRequired = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "No token found, please login first" });
    }

    // Decode or verify token
    const user = await getUser(token);

    if (!user) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    console.log("LoginRequired user:", user); // ✅ Debug

    req.user = user; // attach to req
    next();
  } catch (error) {
    console.error("LoginRequired Error:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
