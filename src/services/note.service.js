import Note from '../models/note.model';
import { client } from '../config/redis';
import { mailSend } from '../utils/helper';
import { token } from 'morgan';

//create new note
export const addNote = async (body) => {
  const data = await Note.create(body);
  if (data) {
    await client.del('allNotes');
    return data;
  }
};

//get all notes
export const getAllNotes = async (body) => {
  const data = await Note.find({ UserID: body.UserID });
  if (data) {
    await client.set('allNotes', JSON.stringify(data));
    return data;
  }
};

//get single note
export const getNote = async (id, body) => {
  const data = await Note.findById({ _id: id, UserID: body.UserID });
  return data;
};

//update single note
export const updateNote = async (id, body) => {
  const data = await Note.findByIdAndUpdate(
    { _id: id, UserID: body.UserID },
    body,
    { new: true }
  );

  if (data) {
    await client.del('allNotes');
    return data;
  }
  // return data;
};

//delete single user
export const deleteNote = async (id, body) => {
  await Note.findByIdAndDelete({ _id: id, UserID: body.UserID });
  await client.del('allNotes');

  return '';
};

// archeive
export const archiveNote = async (_id) => {
  const data = await Note.findByIdAndUpdate(
    { _id },
    { $set: { isArchived: true } }
  );
  if (data) {
    await client.del('allNotes');
    return data;
  }
  // return data;
};

// trashed
export const trashNote = async (_id) => {
  const data = await Note.findByIdAndUpdate(
    { _id },
    { $set: { isDeleted: true } }
  );
  if (data) {
    await client.del('allNotes');
    return data;
  }
  // return data;
};
