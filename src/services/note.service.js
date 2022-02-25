import { note } from '@hapi/joi/lib/base';
import Note from '../models/note.model';

//create new note
export const addNote = async (body) => {
    const data = await Note.create(body);
    return data;
};

//get all notes
export const getAllNotes = async () => {
    const data = await Note.find();
    return data;
};


//get single note
export const getNote = async (id) => {
    const data = await Note.findById(id);
    return data;
};

//update single note
export const updateNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
        {
            _id
        },
        body,
        {
            new: true
        }
    );
    return data;
};

//delete single user
export const deleteNote = async (id) => {
    await Note.findByIdAndDelete(id);
    return '';
};

// archeive
export const archiveNote = async (_id, noteData) => {
    const data = await Note.findByIdAndUpdate({ _id }, { "$set": { isArchived: true } })
    return data;
}





