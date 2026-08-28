const { Router } = require("express");
const {
  registerUser,
  loginUserController,
  logoutUserController,
  getMeController,
} = require("../controllers/auth.controller");
const { authUser } = require("../middleware/auth.middleware");

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", registerUser);



/**
 * @route POST /api/auth/login
 * @desc login user With email and password
 * @access Public
 */
authRouter.post("/login", loginUserController);



/**
 * @route POST /api/auth/logout
 * @desc Clear the token from the cookie and add it to the blacklist
 * @access Public
 */
authRouter.get("/logout", logoutUserController);



/**
 * @route GET /api/auth/get-me
 * @desc get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authUser, getMeController);



module.exports = authRouter;
