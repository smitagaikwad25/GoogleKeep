import express from 'express';
import * as noteController from '../controllers/note.controller';
import { noteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new user
router.post('', noteValidator, userAuth, noteController.addNote);
// route to get all notes
router.get('', userAuth , noteController.getAllNotes);




export default router;
