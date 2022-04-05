import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { mailSend } from '../utils/helper';

//create new user
export const userRegistration = async (body) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds)
  body.password = hashedPassword;
  const data = await User.create(body);

  

  return data;
};


export const login = async (body) => {
  const searchData = await User.findOne({ email: body.email });
  console.log("user infor---->", searchData)
  console.log("req body password------>", body.password)
  console.log(" DB password------->", searchData.password)
  if (body.email == searchData.email) {
    const isMatch = await bcrypt.compare(body.password, searchData.password);
    if (isMatch == true) {
      const token = jwt.sign({ "fName": searchData.fName, "email": searchData.email, "id": searchData._id }, process.env.SECRET_KEY)
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


export const resetPassword = async (data) => {
  const salt = 10
  const encrypt = bcrypt.hashSync(data.password, salt);
  const resetPasswordReslt = await User.findOneAndUpdate({ UserId: data.UserId }, { password: encrypt })
  return resetPasswordReslt;
}



