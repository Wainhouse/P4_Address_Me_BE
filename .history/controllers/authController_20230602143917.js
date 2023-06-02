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

    // passport handles login and password validation
  
    // User with the provided username does not exist
    if (!req.user) {
      return res
        .status(400)
        .json({ message: 'Invalid username or password provided' });
    }

    res.status(200).json({ message: `${username} has logged in successfully` });
  }


export async function logoutUser(req, res) {
    console.log('logout', req.session);
  
    if (req.isAuthenticated()) {
      req.logout((err) => {
        if (err) throw err;
      });
  
      res.status(200).json({ message: 'User logged out successfully' });
    } else {
      res.status(200).json({ message: 'There is no user logged in' });
    }
  }

export async function updatePassword(req, res, next) {
    const { newPassword } = req.body;
    const userId = req.session.passport.user;
  
    try {
      const user = await User.findByIdAndUpdate(userId, {
        password: newPassword,
      });
  
      res
        .status(200)
        .json({ message: 'Password successfully updated', pw: user.password });
    } catch (err) {
      next(err);
    }
  }
  