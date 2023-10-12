import { Router } from "express";
import singUp from "../controllers/auth/singUp.js"
import singout from "../controllers/auth/singout.js"
import singIn from "../controllers/auth/singIn.js"
import validator from "../middlewares/validator.js";
import schemaSingUp from "../schema/auth/singUp.js"
import schemaSingIn from "../schema/auth/singin.js"
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js";
import accountExistsSignIn from "../middlewares/accountSingIn.js";
import createhash from "../middlewares/createhash.js";
import passport from "../middlewares/passport.js";
import isValidPassWord from "../middlewares/isValidPassWord.js";
import getToken from "../middlewares/getToken.js";
import singInToken from "../controllers/auth/singInToken.js";



let authRouter = Router();

authRouter.post('/signin', validator(schemaSingIn), accountExistsSignIn, isValidPassWord, getToken, singIn)
authRouter.post('/signup', validator(schemaSingUp), accountExistsSignUp, createhash, singUp)
authRouter.put('/singout', passport.authenticate('jwt', { session: false }), singout)
authRouter.post('/token', passport.authenticate('jwt', { session: false }), getToken, singInToken)

export default authRouter;