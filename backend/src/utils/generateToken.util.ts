import jwt from 'jsonwebtoken';
import { Email } from '../../types/auth.types';
import env from '../config/env';

const jwtSecret = env.jwtSecret

export const generateToken = (email: Email): string => {
  const payload = {
    email
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};
