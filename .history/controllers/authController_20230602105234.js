import User from '../models/User.js';

export async function registerUser(req, res, next) {
    const { email, username, password } = req.body;

  try {
    // create user
    const newUser = await User.create({ email, username, password });

    // Construct user 
    const user = { ...newUser._doc };
    delete user.password;

    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}
