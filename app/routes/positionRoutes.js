import express from 'express';
import { CreatePositionController, GetAllPositions } from '../controllers/positionControllers.js';
import { validateCreatePosition } from '../middlewares/createPositionValidator.js';
import { authenticate } from '../middlewares/auth.js';

const positionRouter = express.Router();

positionRouter.post('/positions', validateCreatePosition, CreatePositionController);
positionRouter.get('/positions', authenticate, GetAllPositions);

export default positionRouter;