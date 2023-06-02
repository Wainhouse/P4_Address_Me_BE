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


export async function loginUser(req, res) {
    const { username } = req.body;

    //need to configure passport
  
    // User with the provided username does not exist
    if (!req.user) {
      return res
        .status(400)
        .json({ message: 'Invalid username or password provided' });
    }

    res.status(200).json({ message: `${user} has logged in successfully` });
  }