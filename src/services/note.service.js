import Note from '../models/note.model';

//create new note
export const addNote = async (body) => {
    const data = await Note.create(body);
    return data;
};
