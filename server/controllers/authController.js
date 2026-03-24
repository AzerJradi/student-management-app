import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    const exist =
      await User.findOne({
        email,
      });

    if (exist)
      return res.json("User exists");

    const user =
      await User.create({
        name,
        email,
        password,
        role,
      });

    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};

export const login = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await User.findOne({
        email,
      });

    if (!user)
      return res.json("No user");

    if (user.password !== password)
      return res.json(
        "Wrong password"
      );

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (err) {
    res.json(err.message);
  }
};