import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//@Desc   Auth user & get Token(login)
//@route GET /api/users
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const { _id, email, name, isAdmin } = user;
    res.json({
      _id,
      name,
      email,
      isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser };
