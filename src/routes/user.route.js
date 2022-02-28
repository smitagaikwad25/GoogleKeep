import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

router.post('', newUserValidator, userController.userRegistration);

router.get('/login', userController.userLogin);

router.post('/forgotpassword', userController.forgotpassword)

export default router;