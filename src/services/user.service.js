import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { mailSend } from '../utils/helper';

//create new user
export const userRegistration = async (body) => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(body.password, saltRounds)
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};


export const login = async (body) => {
  const searchData = await User.findOne({ email: body.email });
  if (body.email == searchData.email) {
    const isMatch = await bcrypt.compare(body.password, searchData.password);
    if (isMatch == true) {
      const token = jwt.sign({ "email": searchData.email, "id": searchData._id }, process.env.SECRET_KEY)
      return token;
    } else {
      throw new Error('password doesnt match');
    }
  } else {
    throw new Error('email id doesnt match');

  }
};


export const forgotpassword = async (body) => {
  const searchData = await User.findOne({ email: body.email });
  if (body.email == searchData.email) {
    const token = jwt.sign({ "email": searchData.email, "id": searchData._id }, process.env.SECRET_KEY)
    const sendingEmail = mailSend(searchData.email, token)
    return sendingEmail;
  } else {
    throw new Error('email id doesnt match');

  }
};

