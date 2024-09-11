import { handleAdminGetUsers } from '@/app/backend/controllers/adminController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    return await handleAdminGetUsers(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
