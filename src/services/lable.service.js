import Lable from '../models/lable.model';

//create new lable
export const addNote = async (body) => {
  const data = await Lable.create(body);

  return data;
};
