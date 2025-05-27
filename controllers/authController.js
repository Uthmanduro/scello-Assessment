const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.create({ username, password, role });
    res
      .status(201)
      .json({
        message: 'User registered',
        user: { id: user.id, username: user.username, role: user.role },
      });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
