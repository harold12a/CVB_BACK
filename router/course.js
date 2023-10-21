import { Router } from "express";

import read from '../controllers/Course/read.js'
import create from '../controllers/Course/create.js'
import update from '../controllers/Course/update.js'
import destroy from '../controllers/Course/destroy.js'
import passport from '../middlewares/passport.js';

let courseRouter = Router();

courseRouter.get('/', read)
courseRouter.get('/:_id', read)
courseRouter.post('/', passport.authenticate('jwt', { session: false }), create)
courseRouter.put('/:id', passport.authenticate('jwt', { session: false }), update)
courseRouter.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default courseRouter