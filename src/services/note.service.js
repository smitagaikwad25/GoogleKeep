import Note from '../models/note.model';
import { client } from '../config/redis';

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
    const data = await Note.findByIdAndUpdate({ _id: id, UserID: body.UserID }, body, { new: true });
    return data;
};

//delete single user
export const deleteNote = async (id, body) => {
    await Note.findByIdAndDelete({ _id: id, UserID: body.UserID });
    return '';
};

// archeive
export const archiveNote = async (id, body) => {
    const data = await Note.findByIdAndUpdate({ id }, { $set: { isArchived: true } })
    return data;
}


// trashed
export const trashNote = async (_id) => {
    const data = await Note.findByIdAndUpdate({ _id }, { $set: { isDeleted: true } })
    return data;
}


// export const archiveNote = async (body) => {
//     const data = await Note.find({ userId: body.userId, _id: body.noteid }, { isArchieved: true });
//     return data;
// }

// export const trashNote = async (body) => {
//     const data = await Note.find({ userId: body.userId, _id: body.noteid }, { isDeleted: true });
//     return data;
// }





