import express from 'express';
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './router/index.js';
import cors from 'cors';
import morgan from 'morgan';
import not_found_hanlder from './middlewares/not_found_handler.js';
import error_hanlder from './middlewares/error_handler.js';


const server = express();

const PORT = process.env.PORT || 8000 
const ready = () => console.log('corriendo en el port: '+ PORT);

// middleware
server.use(express.json())                                    
server.use(express.urlencoded({ extended: true }))  
server.use(cors())                                  
server.use(morgan('dev'))                          


// router
server.use('/api', indexRouter)
server.use(not_found_hanlder)
server.use(error_hanlder)


// Router + server

server.listen(PORT, ready);

