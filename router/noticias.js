import { Router } from "express";

import read from '../controllers/Noticias/read.js'
import create from '../controllers/Noticias/create.js'
import update from '../controllers/Noticias/update.js'
import destroy from '../controllers/Noticias/destoy.js'
import passport from '../middlewares/passport.js';

let noticiasRouter = Router()

noticiasRouter.get('/', read)
noticiasRouter.get('/:_id', read)
noticiasRouter.post('/', passport.authenticate('jwt', { session: false }), create)
noticiasRouter.put('/:id', passport.authenticate('jwt', { session: false }), update)
noticiasRouter.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default noticiasRouter
