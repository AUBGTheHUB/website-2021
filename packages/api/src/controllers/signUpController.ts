import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import SignUp from '../models/signUp';

dotenv.config({ path: `${__dirname}/../.env` });
const hostname = process.env.STMP_HOST;
const username = process.env.SMTP_USER;
const pswd = process.env.SMTP_PASS;
const emailPort = Number(process.env.EMAIL_PORT) | 465;

async function sendEmail(emailTo: string, subject: string, htmlFile: object) {
  const transporter = nodemailer.createTransport({
    host: hostname,
    port: emailPort,
    secure: true,
    requireTLS: true,
    auth: {
      user: username,
      pass: pswd
    },
    logger: true
  });

  const info = await transporter.sendMail({
    from: `The Hub <${username}>`,
    to: emailTo,
    subject: subject,
    text: '',
    html: htmlFile,
    headers: { 'x-myheader': 'test header' }
  });

  console.log('Message sent: %s', info.response);
}

export const createSignUp = async (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  const signUpData = req.body;

  const s = new SignUp(signUpData);
  await s
    .validate() // run validate
    .then(async () => {
      // if reached here, then validation was fine, attempt to save
      SignUp.findOne({ email: signUpData.email }).exec((err, su) => {
        // callback
        // check if findOne failed
        if (err) return res.status(500).json({ message: err });
        // check if a signup was found
        if (su) return res.status(409).json({ message: 'This email already exists' });

        s.save((err) => {
          // callback in case save fails, in which case log and return 500
          if (err) return res.status(500).json({ message: err });
        });

        sendEmail(signUpData.email, 'Registration for HackAUBG 4.0', {
          path: './src/templates/hackathon.html'
        });

        return res.status(201).json({
          // if reached here, then save was fine, return 201 CREATED
          signup: s
        });
      });
    })
    .catch((err) => {
      // catch the failed validate, which is a 400 Bad request
      console.log(err);

      return res.status(400).json({
        message: err
      });
    });
};
