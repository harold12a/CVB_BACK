import { Router } from "express";

import read from '../controllers/Publication/read.js'
import create from '../controllers/Publication/create.js'
import update from '../controllers/Publication/update.js'
import destroy from '../controllers/Publication/destroy.js'
import passport from '../middlewares/passport.js';

let postRouter = Router();

postRouter.get('/', read)
postRouter.get('/:_id', read)
postRouter.post('/', passport.authenticate('jwt', { session: false }), create)
postRouter.put('/:id', passport.authenticate('jwt', { session: false }), update)
postRouter.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default postRouter