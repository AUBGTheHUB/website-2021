import {Request, Response} from 'express';
import SignUp from '../models/signup';

export const createSignUp = async(req: Request, res: Response)=>
{
  const signUpData = req.body;

  const s = new SignUp(signUpData);
  await s.validate().catch(error =>{
    return res.status(400).json({"message":error});
  });

  const signUp = await SignUp.create(signUpData);

  return res.status(200).json({
    "signup": signUp,
  });
}

