import { User } from "../models/user.model";
import httpStatus from "http-status";

const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(httpStatus.FOUND);
    }
  } catch (error) {}
};
