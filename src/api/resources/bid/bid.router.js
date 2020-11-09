import express from 'express';
import bidController from './bid.controller';

export const bidRouter = express.Router();
bidRouter
  .route('/')
  .post(bidController.create);
//  .get(bidController.findAll);