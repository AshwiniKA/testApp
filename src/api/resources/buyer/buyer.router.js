import express from 'express';
import buyerController from './buyer.controller';

export const buyerRouter = express.Router();
buyerRouter.route('/')
.post(buyerController.create)
.get(buyerController.findAll);

buyerRouter.
route('/:id')
.get(buyerController.findOne);