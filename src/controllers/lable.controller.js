import HttpStatus from 'http-status-codes';
import * as lableService from '../services/note.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createLable = async (req, res, next) => {
    try {
        // console.log("req.body", req.body)
        // req.body.UserID = req.body.data.id;
        const data = await lableService.createLable(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'created successfully'
        });
    } catch (error) {
        next(error);
    }
};

// export const getAllNotes = async (req, res, next) => {
//     try {
//         const data = await NoteService.getAllNotes(req.body);
//         res.status(HttpStatus.OK).json({
//             code: HttpStatus.OK,
//             data: data,
//             message: 'fetched successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };


// /**
//  * Controller to get a single note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getNote = async (req, res, next) => {
//     try {
//         const data = await NoteService.getNote(req.params.noteid, req.body);
//         res.status(HttpStatus.OK).json({
//             code: HttpStatus.OK,
//             data: data,
//             message: 'fetched successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// /**
//  * Controller to update a note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const updateNote = async (req, res, next) => {
//     try {
//         const data = await NoteService.updateNote(req.params.noteid, req.body);
//         res.status(HttpStatus.ACCEPTED).json({
//             code: HttpStatus.ACCEPTED,
//             data: data,
//             message: 'updated successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// /**
//  * Controller to delete a note
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const deleteNote = async (req, res, next) => {
//     try {
//         await NoteService.deleteNote(req.params.noteid, req.body);
//         res.status(HttpStatus.OK).json({
//             code: HttpStatus.OK,
//             message: 'deleted successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// export const archiveNote = async (req, res, next) => {
//     try {
//         console.log("data----->",req.params.noteid,req.body)
//         const data = await NoteService.archiveNote(req.params.noteid);
//         res.status(HttpStatus.OK).json({
//             code: HttpStatus.OK,
//             data: data,
//             message: 'archived successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// export const trashNote = async (req, res, next) => {
//     try {
//         const data = await NoteService.trashNote(req.params.noteid, req.body);
//         res.status(HttpStatus.OK).json({
//             code: HttpStatus.OK,
//             data: data,
//             message: 'trashed successfully'
//         });
//     } catch (error) {
//         next(error);
//     }
// };





