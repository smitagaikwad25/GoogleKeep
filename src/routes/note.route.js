import express from 'express';
import * as noteController from '../controllers/note.controller';
import { noteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as redis from '../middlewares/radis.middleware';

const router = express.Router();


//route to create a new note
router.post('', noteValidator, userAuth, noteController.addNote);

// route to get all notes
router.get('', userAuth, redis.redis_data, noteController.getAllNotes);

//route to get a single note by their id
router.get('/:noteid', userAuth, noteController.getNote);

//route to update a single note by their user id
router.put('/:noteid', userAuth, noteController.updateNote);

//route to delete a single note by their user id
router.delete('/:noteid', userAuth, noteController.deleteNote);

//route to archive note 
router.put('/isarchive/:noteid', userAuth, noteController.archiveNote);

//route to archive note 
router.put('/istrash/:noteid', userAuth, noteController.trashNote);





export default router;
