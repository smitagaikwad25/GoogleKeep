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
  
