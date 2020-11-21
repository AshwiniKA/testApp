  
import express from 'express';
import { songRouter } from './resources/song';
import { projectRouter } from './resources/project';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter);

//export const restRouter1 = express.Router();
restRouter.use('/projects', projectRouter);