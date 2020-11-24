  
import express from 'express';
import { songRouter } from './resources/song';
import { projectRouter } from './resources/project';
import { buyerRouter } from './resources/buyer';
import { playerRouter } from './resources/player';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter);

//export const restRouter1 = express.Router();
restRouter.use('/projects', projectRouter);

restRouter.use('/buyers', buyerRouter);

restRouter.use('/players', playerRouter);