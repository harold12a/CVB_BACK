import { Router } from "express";

import read from '../controllers/Training/read.js'
import create from '../controllers/Training/create.js'
import update from '../controllers/Training/update.js'
import destroy from '../controllers/Training/destroy.js'
import passport from '../middlewares/passport.js';

let trainingRouter = Router();

trainingRouter.get('/', read)
trainingRouter.get('/:_id', read)
trainingRouter.post('/', passport.authenticate('jwt', { session: false }), create)
trainingRouter.put('/:id', passport.authenticate('jwt', { session: false }), update)
trainingRouter.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default trainingRouter