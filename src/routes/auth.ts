import express from 'express';
import { AuthController } from '../http/controllers/AuthController';
import { ErrorHandler } from '../http/middlewares/ErrorHandler';

const authController = new AuthController();

const router = express.Router();
router.post('/register', ErrorHandler.catchErrors(authController.register));
router.post('/login', ErrorHandler.catchErrors(authController.login));

export default router;
