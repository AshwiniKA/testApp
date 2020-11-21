import express from 'express';
import projectController from './project.controller';

export const projectRouter = express.Router();
projectRouter
  .route('/')
  .post(projectController.create);

//   songRouter.
//   route('/:id')
//   .get(songController.findOne)
//   .delete(songController.delete)
//   .put(songController.update);