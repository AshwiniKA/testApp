import express from 'express';
import playerController from './player.controller';

export const playerRouter = express.Router();
playerRouter
  .route('/')
 // .post(playerController.create)
  .get(playerController.findAll);

playerRouter
   .route('/:id')
   .get(playerController.findOne);

playerRouter
   .route('/:nameFirst')
   .get(playerController.findByName);
//   .delete(songController.delete)
//   .put(songController.update);