import express from 'express';
import createError from 'http-errors';
import q2m from 'query-to-mongo';
import {} from './schema.js';

const reviewsRouter = express.Router();

reviewsRouter.post('/', async (req, res, next) => {});

reviewsRouter.get('/', async (req, res, next) => {});

reviewsRouter.get('/:id', async (req, res, next) => {});

reviewsRouter.put('/:id', async (req, res, next) => {});

reviewsRouter.delete('/:id', async (req, res, next) => {});

export default reviewsRouter;
