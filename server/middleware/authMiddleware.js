import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token =
    req.headers.authorization;

  if (!token)
    return res.json("No token");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch {
    res.json("Invalid token");
  }
};