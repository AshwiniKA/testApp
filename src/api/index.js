  
import express from 'express';
import { songRouter } from './resources/song';
import { bidRouter } from './resources/bid';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter);

//export const restRouter1 = express.Router();
restRouter.use('/bids', bidRouter);