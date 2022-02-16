import {Router} from 'express';
import { createSignUp } from '../../src/controllers/signUpController';

export const signUpRoutes = Router();

signUpRoutes.post('/api/v1/signup', createSignUp);
