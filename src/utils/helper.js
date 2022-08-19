import nodemailer from "nodemailer";
import logger, { logStream } from '../config/logger';

export const mailSend = (userMailID, token) => {
    const transport = nodemailer.createTransport(
        {

            // port:465,
            // service: "gmail",
            // secure: true,
            // auth: {
            //     user: process.env.SENDE_ID,
            //     pass: process.env.PASSWORD
            // }
            host: 'smtp.abc.cu',
            port: 25 
        }
    )
    const mailOption = {
        from: process.env.SENDE_ID,
        to: userMailID,
        subject: "Pasword Reset Link",
        // text: "Hello world?",
        html: `<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:${process.end.APP_PORT}/${token}">click here</a></h1>`
    }

    transport.sendMail(mailOption, (err, info) => {
        const sendEmailInfo = err ? logger.log('error', err) : logger.log('info', info);
        return sendEmailInfo;
    });

}