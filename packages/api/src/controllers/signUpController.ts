import { Request, Response } from 'express';
import SignUp from '../models/signup';

export const createSignUp = async (req: Request, res: Response) => {
  const signUpData = req.body;

  const s = new SignUp(signUpData);
  await s
    .validate() // run validate
    .then(async () => { // if reached here, then validation was fine, attempt to save
      SignUp.findOne({"email": signUpData.email}).exec((err, su)=>{ // callback
        // check if findOne failed
        if(err) return res.status(500).json({message: err});
        // check if a signup was found
        if(su) return res.status(409).json({message: "This email already exists"});

        s.save((err) => { // callback in case save fails, in which case log and return 500
          if(err) return res.status(500).json({ message: err });
        });

        return res.status(201).json({ // if reached here, then save was fine, return 201 CREATED
          signup: s
        })
      });
    })
    .catch((err) => { // catch the failed validate, which is a 400 Bad request
      return res.status(400).json({
        message: err
      });
    });
};
